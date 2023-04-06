(function () {
  const defaultOptions = {
    title: "Suggest an Edit 📝",
    template: "Last modified {docsify-updated}, {edit}",
    formatUpdated: "{YYYY}/{MM}/{DD}",
    editBase: undefined,
    position: "top",
  };

  function render(vm, options) {
    const editLink = '<a href="' + options.editBase + "/" + vm.route.file + '">' + options.title + "</a>";
    return '<div style="overflow: auto;float: right;"><p>' + options.template.replace("{edit}", editLink) + "</p></div>";
  }

  function plugin(hook, vm) {
    const options = Object.assign(defaultOptions, vm.config.editButton || {});
    const whereToPlace = String(options.position).toLowerCase();
    if (options.formatUpdated) {
      $docsify.formatUpdated = options.formatUpdated;
    }

    hook.beforeEach(function (markdown) {
      if (!options.editBase) {
        console.error("Please specify `editButton.editBase` link in your docsify config.");
        return markdown;
      }

      const text = render(vm, options);
      switch (whereToPlace) {
        case "top":
          return text + "\n\n" + markdown;
        default:
          return markdown + "\n\n" + text;
      }
    });
  }

  // Add plugin to docsify's plugin array
  $docsify = $docsify || {};
  $docsify.plugins = [].concat($docsify.plugins || [], plugin);
})();
