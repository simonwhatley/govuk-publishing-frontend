# Option select

A scrollable list of checkboxes to be displayed on a form where one might otherwise use a multi-select.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/option-select/)

## Example usage

**Macro**
```
{{ govukPubOptionSelect({
  idPrefix: 'countries',
  name: 'country[]',
  heading: {
    text: 'Countries'
  },
  items: [{
    text: 'Austria',
    id: 'austria',
    value: 'austria'
  },{
    text: 'Belgium',
    id: 'belgium',
    value: 'belgium'
  },{
    text: 'Bulgaria',
    id: 'bulgaria',
    value: 'bulgaria'
  },{
    text: 'Croatia',
    id: 'croatia',
    value: 'croatia'
  },{
    text: 'Republic of Cyprus',
    id: 'republic-of-cyprus',
    value: 'republic-of-cyprus'
  },{
    text: 'Czech Republic',
    id: 'czech-republic',
    value: 'czech-republic'
  },{
    text: 'Denmark',
    id: 'denmark',
    value: 'denmark'
  },{
    text: 'Estonia',
    id: 'estonia',
    value: 'estonia'
  },{
    text: 'Finland',
    id: 'finland',
    value: 'finland'
  },{
    text: 'France',
    id: 'france',
    value: 'france'
  },{
    text: 'Germany',
    id: 'germany',
    value: 'germany'
  },{
    text: 'Greece',
    id: 'greece',
    value: 'greece'
  },{
    text: 'Hungary',
    id: 'hungary',
    value: 'hungary'
  },{
    text: 'Ireland',
    id: 'ireland',
    value: 'ireland'
  },{
    text: 'Italy',
    id: 'italy',
    value: 'italy'
  },{
    text: 'Latvia',
    id: 'latvia',
    value: 'latvia'
  },{
    text: 'Lithuania',
    id: 'lithuania',
    value: 'lithuania'
  },{
    text: 'Luxembourg',
    id: 'luxembourg',
    value: 'luxembourg'
  },{
    text: 'Malta',
    id: 'malta',
    value: 'malta'
  },{
    text: 'Netherlands',
    id: 'netherlands',
    value: 'netherlands'
  },{
    text: 'Poland',
    id: 'poland',
    value: 'poland'
  },{
    text: 'Portugal',
    id: 'portugal',
    value: 'portugal'
  },{
    text: 'Romania',
    id: 'romania',
    value: 'romania'
  },{
    text: 'Slovakia',
    id: 'slovakia',
    value: 'slovakia'
  },{
    text: 'Slovenia',
    id: 'slovenia',
    value: 'slovenia'
  },{
    text: 'Spain',
    id: 'spain',
    value: 'spain'
  },{
    text: 'Sweden',
    id: 'sweden',
    value: 'sweden'
  },{
    text: 'United Kingdom',
    id: 'united-kingdom',
    value: 'united-kingdom'
  }]
}) }}
```

**JavaScript**
```html
<script src="/public/javascripts/components/option-select/option-select.js"></script>
<script type="text/javascript">
  var $element = $('#countries');
  var optionSelect = new GOVUK.Modules.OptionSelect();
  optionSelect.start($element);
</script>
```

## Accessibility acceptance criteria

The option select must:

- indicate that the option select is expandable/collapsible
- indicate the initial state of expandable content
- indicate where the state of expandable content has changed

The option select inputs must:

- have a margin to the right when the box is scrollable so that users can interact with a scrollbar without accidentally clicking an option
- only include an aria-controls attribute if an element with the ID specified exists on the page
- be grouped with a label

The option select filter must:

- be focusable with a keyboard
- indicate when it has keyboard focus
- inform the user that is it an editable field
- inform the user when there are matches, or if there are no matches
- inform the user as the number of matches changes

## Arguments

This component accepts the following arguments.

|Name|Type|Required|Description|
|---|---|---|---|
|name|string|Yes|Name attribute for all checkbox items.|
|idPrefix|string|No|String to prefix id for each checkbox item if no id is specified on each item. If not passed, fall back to using the name option instead.|
|heading|object|Yes|Options for the heading element. See [heading](#heading)|
|showOnLoad|boolean|No|Show the content of the option select. Defaults to `false` (collapsed).|
|items|object|Yes|Options for the items elements. See [items](#items)|
|fieldset|object|Yes|Options for the fieldset element (e.g. legend). See [fieldset](#fieldset)|
|filter|object|Yes|Options for the filter element. See [filter](#filter)|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the heading.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the heading.|

### Fieldset

|Name|Type|Required|Description|
|---|---|---|---|
|legend|object|Yes|Options for the legend element. See [legend](#legend)|

#### Legend

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the legend. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the legend. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the legend.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the legend.|

### Items

|Name|Type|Required|Description|
|---|---|---|---|
|id|string|Yes|The unique identifier for the item.|
|text|string|Yes|If `html` is set, this is not required. Text to use within the item. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the item. If `html` is provided, the `text` argument will be ignored.|
|value|string|Yes|Value for the checkbox input.|
|checked|boolean|No|If true, checkbox will be checked.|
|disabled|boolean|No|If true, checkbox will be disabled.|

### Filter

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the filter. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the filter. If `html` is provided, the `text` argument will be ignored.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
