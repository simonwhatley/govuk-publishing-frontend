# Info metric

Displays a view of a single or aggregated metric for a content item. 

The minimum requirements for it to display are a name and figure but it also supports trend direction and explanatory text to describe the metric.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/info-metric/)

## Example usage

```
{{ govukPubInfoMetric({
  heading: {
    text: "Unique page views"
  },
  context: {
    text: "Number of visits during which the page was viewed at least once"
  },
  metric: {
    figure: "1,234",
    trend: "0.5",
    period: "March 2019 to April 2019"
  }
}) }}
```

## Accessibility acceptance criteria

Icons used in the component must have text equivalents

Links in the component must:

- accept focus
- be focusable with a keyboard
- be usable with a keyboard
- indicate when they have focus
- change in appearance when touched (in the touch-down state)
- change in appearance when hovered
- be usable with touch
- be usable with [voice commands](https://www.w3.org/WAI/perspectives/voice.html)
- have visible text
- have meaningful text

## Arguments

This component accepts the following arguments.

|Name|Type|Required|Description|
|---|---|---|---|
|heading|object|Yes|Options for the heading. See [heading](#heading)|
|description|object|No|Options for the description. See [description](#description)|
|details|object|No|Options for the details. See [details](#details)|
|metric|object|Yes|Options for the metric. See [metric](#metric)|
|classes|string|No|Classes to add to the container tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container tag.|

### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|
|classes|string|No|Classes to add to the heading.|

### Description

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the description. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the description. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the description.|

### Details

|Name|Type|Required|Description|
|---|---|---|---|
|summaryText|string|Yes|If `summmaryHtml` is set, this is not required. Text to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` argument will be ignored.|
|summaryHtml|string|Yes|If `summmaryText` is set, this is not required. HTML to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` argument will be ignored.|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|open|boolean|no|If `true`, details element will be expanded.|
|classes|string|No|Classes to add to the details component.|
|containerClasses|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the details component.|

### Metric

|Name|Type|Required|Description|
|---|---|---|---|
|figure|numeric|Yes|The value to be displayed|
|figureContext|string|No|Additional detail to give context to the figure being presented, for example, number of responses.|
|trend|numeric|No|The percentage up, down or no change for the figure.|
|period|string|No|The time period to which the metric relates.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
