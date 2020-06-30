# Date filter

Form fields to filter a finder by a date range.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/date-filter/)

## Example usage

```
{{ govukPubDateFilter({
  heading: {
    text: "Date"
  },
  from: {
    id: "start-date",
    name: "start-date",
    label: {
      text: "Start date"
    },
    hint: {
      text: "For example, 2019 or 1/1/2019"
    }
  },
  to: {
    id: "end-date",
    name: "end-date",
    label: {
      text: "End date"
    },
    hint: {
      text: "For example, 2020 or 31/12/2019"
    }
  }
}) }}
```

## Accessibility acceptance criteria

The component must only include `aria-controls` attributes on inputs if an element with the ID specified exists on the page.

Form labels must:

- be associated with a form field
- focus the associated field when clicked

Text input fields must:

- accept focus
- be focusable with a keyboard
- be usable with a keyboard
- indicate when they have focus

## Arguments

This component accepts the following arguments.

|Name|Type|Required|Description|
|---|---|---|---|
|heading|object|Yes|The heading for the expander. See [heading](#heading)|
|from|object|Yes|The from date for the filter. See [From and to inputs](#from-and-to-inputs)|
|to|object|Yes|The to date for the filter. See [From and to inputs](#from-and-to-inputs)|
|showOnLoad|boolean|No|Show the content of the expander. Defaults to `false` (collapsed).|
|classes|string|No|Classes to add to the expander container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the expander container.|

### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|
|classes|string|No|Classes to add to the heading tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the heading tag.|

[See options for the expander component](https://govuk-publishing-frontend.herokuapp.com/components/expander/)

### Filter

|Name|Type|Required|Description|
|---|---|---|---|
|classes|string|No|Classes to add to the filter container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the filter container.|

### From and to inputs

[See GOV.UK text input component](https://design-system.service.gov.uk/components/text-input/)


*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
