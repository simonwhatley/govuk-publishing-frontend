# Brexit transition countdown

A countdown to 1 January 2021 used in the Brexit transition campaign.

When a URL is set it acts as a link to actions users need to take to prepare for Brexit during the transition period.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/brexit-countdown/)

## Example usage

```
{{ govukPubBrexitCountdown({
  heading: {
    text: 'Brexit transition'
  },
  link: {
    text: 'Check you’re ready for 2021',
    href: 'https://www.gov.uk/transition'
  },
  count: 18,
  classes: 'govuk-pub-brexit-countdown--cta govuk-link'
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
|heading|object|Yes|Options for the heading. See [heading](#heading)|
|link|object|Yes|Options for the link. See [link](#link)|
|count|numeric|Yes|A count of the days remaining.|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|
|classes|string|No|Classes to add to the heading.|

### Link

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the link. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the link. If `html` is provided, the `text` argument will be ignored.|


*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
