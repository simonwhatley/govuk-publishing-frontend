# Topic list

Displays a list of topics.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/topic-list/)

## Example usage

```
{{ govukPubTopicList({
  items: [{
    text: 'Environmental taxes, reliefs and schemes for businesses',
    href: '#'
  }, {
    text: 'Aggregates Levy: register or change your details',
    href: '#'
  }, {
    text: 'Pay environmental taxes',
    href: '#'
  }]
}) }}
```

## Accessibility acceptance criteria

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
|items|array|Yes|Options for the item elements. See [items](#items)|
|moreLink|object|Yes|Options for the more link elements. See [more link](#more-link)|
|brand|string|No|See [brand options](#brand-options)|
|small|boolean|No|Whether to show the links smaller.|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Items

|Name|Type|Required|Description|
|---|---|---|---|
|href|string|No|The URL of the resource.|
|text|string|Yes|If `html` is set, this is not required. Text to use within the anchor link. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the anchor link. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the anchor link.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the anchor link.|

### More link

|Name|Type|Required|Description|
|---|---|---|---|
|href|string|No|The URL of the resource.|
|text|string|Yes|If `html` is set, this is not required. Text to use within the anchor link. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the anchor link. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the anchor link.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the anchor link.|

## Brand options

See [crest and brand options](https://github.com/simonwhatley/govuk-publishing-frontend/blob/master/docs/brand/crest-and-brand-options.md)

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
