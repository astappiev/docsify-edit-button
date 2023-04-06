# docsify-edit-btn

A plugin for docsify to add a `Suggest an edit` button on every page, which links to GitHub repository or whenewer else.

## Install

Add the plugin to `index.html` via a CDN or any other way, e.g.:

```html
<script src="https://cdn.jsdelivr.net/npm/docsify-edit-btn"></script>
```

## Usage

Add javasript to `index.html`, and you can modify the content of the text field arbitrarily:

```html
<script>
  window.$docsify = {
    editButton: {
      title: "Suggest an Edit",
      template: "Last modified {docsify-updated}, {edit}",
      formatUpdated: "{DD}.{MM}.{YYYY}",
      editBase: "https://github.com/astappiev/docsify-edit-btn/edit/main",
      position: "top", // "top" or "bottom", default to "top"
    },
  };
</script>
```

## Time Patterns

Please see [https://github.com/lukeed/tinydate#patterns](https://github.com/lukeed/tinydate#patterns)

- `{YYYY}`: full year; eg: **2017**
- `{YY}`: short year; eg: **17**
- `{MM}`: month; eg: **04**
- `{DD}`: day; eg: **01**
- `{HH}`: hours; eg: **06** (24h)
- `{mm}`: minutes; eg: **59**
- `{ss}`: seconds; eg: **09**
- `{fff}`: milliseconds; eg: **555**
