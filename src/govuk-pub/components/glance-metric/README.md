# Glance metric

Displays an at-a-glance view of data for a content item. 

The minimum requirements for it to display are a heading and figure.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/glance-metric/)

## Example usage

```
{{ govukPubGlanceMetric({
  heading: {
    text: "Unique page views"
  },
  metric: {
    figure: "9.47",
    measurement: {
      unit: "m",
      label: "million"
    }
  }
}) }}
```

## Accessibility acceptance criteria

Where an abbreviated label for a metric is used it MUST be accompanied with the explicit label.

Icons used in the component must have text equivalents.

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
|description|object|No|Options for the description displayed below the metric. See [description](#description)|
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

### Metric

|Name|Type|Required|Description|
|---|---|---|---|
|figure|numeric|Yes|The value to be displayed|
|measurement|object|No|Options for the measurement. See [measurement](#measurement)|

#### Measurement

|Name|Type|Required|Description|
|---|---|---|---|
|unit|string|No|The unit of measurement, for example, ‘k’|
|label|string|No|The `aria-label` for the unit, for example, ‘thousand’|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
