# Glance metric

Displays an at-a-glance view of data for a content item. 

The minimum requirements for it to display are a name, figure, and time period.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/glance-metric/)

## Example usage

```
{{ govukPubGlanceMetric({

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


### Heading

|Name|Type|Required|Description|
|---|---|---|---|


### Description

|Name|Type|Required|Description|
|---|---|---|---|


### Details

|Name|Type|Required|Description|
|---|---|---|---|


### Metric

|Name|Type|Required|Description|
|---|---|---|---|


*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
