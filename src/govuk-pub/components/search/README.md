# Search

Displays a search box with label and attached submit button. The component must be used within an HTML form. The search input has a name=”q” attribute and a customisable ID and NAME.

It can be used on white or on GOV.UK blue using the `inverse: true` option.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/search/)

## Example usage

**Macro**
```
{{ govukPubSearch({
  attributes: {
    id: 'search-form'
  },
  label: {
    text: 'Search GOV.UK'
  }
}) }}
```

<!-- **JavaScript**
```html
<script src="/public/javascripts/toggle-input-class-on-focus.js"></script>
<script type="text/javascript">
  var $element = $('#search-form');
  var toggleInputClassOnFocus = new GOVUK.Modules.ToggleInputClassOnFocus();
  toggleInputClassOnFocus.start($element);
</script>
``` -->

## Accessibility acceptance criteria

The search box should:

- be used inside a form with the role of ‘search’, to indicate it as a [search landmark](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_lh_search)
- have a clear label to identify the search functionality, which is visible to all users

## Arguments

This component accepts the following arguments.

|Name|Type|Required|Description|
|---|---|---|---|
|id|string|No|A unique identifier for the element.|
|input|object|Yes|Options for the input element. See [input](#input)|
|label|object|Yes|Options for the label element. See [label](#label)|
|button|object|Yes|Options for the button element. See [button](#button)|
|inverse|boolean|No|Default is `false`. Setting this to `true` renders the search on a blue background.|
|large|boolean|No|Default is `false`. Setting this to `true` renders a larger search input.|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Input

|Name|Type|Required|Description|
|---|---|---|---|
|name|string|Yes|The name of the input, which is submitted with the form data.|
|value|string|No|Optional initial value of the input.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the input.|

### Label

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|
|inline|boolean|No|Default is `false`. Setting this to `true` renders the label inline.|
|classes|string|No|Classes to add to the label.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the label.|

### Button

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the button. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the button. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the button.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the button.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
