# Chevron banner

Displays a branded banner for use on EU Exit campaign pages. This should not be used on non-campaign pages.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/chevron-banner/)

## Example usage

```
{{ govukPubChevronBanner({
  text: 'Check what you need to do',
  href: '#'
}) }}
```

## Accessibility acceptance criteria

The component must:

- accept focus
- be focusable with a keyboard
- be usable with a keyboard
- be usable with touch
- indicate when they have focus

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

## Arguments

This component accepts the following arguments.

|Name|Type|Required|Description|
|---|---|---|---|
|href|string|Yes|URL of the item anchor. Both `href` and `text` or `html` attributes for banner need to be provided.|
|text|string|Yes|If `html` is set, this is not required. Text to use within the banner. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the banner. If `html` is provided, the `text` argument will be ignored.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the anchor tag.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
