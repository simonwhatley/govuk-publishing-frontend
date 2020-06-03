# Notice

Displays a notice to convey and highlight information.

The notice component replaces the notice and withdrawal notice patterns on GOV.UK.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/notice/)

## Example usage

```
{{ appNotice({
  heading: {
    text: 'Statistics release cancelled'
  },
  description: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
}) }}
```

## Accessibility acceptance criteria

The notice must:

- have a border colour contrast ratio of more than 4.5:1 with its background to be visually distinct.
- always render headings with associated description content, so there are no isolated heading elements inside the component

## Arguments

This component accepts the following arguments.

|Name|Type|Required|Description|
|---|---|---|---|
|heading|object|Yes|See [heading](#heading)|
|description|object|Yes|See [description](#description)|
|classes|string|No|Classes to add to the section container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the section container.|

### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|
|classes|string|No|Classes to add to the heading tag.|

### Description

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the description. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the description. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the paragraph tag.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
