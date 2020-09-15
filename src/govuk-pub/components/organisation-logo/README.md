# Organisation logo

Displays an organisation logo: text with crest and branded border colour.

Organisation name must be provided with pre-formatted line breaks. These cannot be inferred from the name alone.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/organisation-logo/)

## Example usage

```
{{ govukPubOrganisationLogo({
  text: 'Cabinet Office',
  href: '#',
  crest: 'single-identity',
  brand: 'cabinet-office'
}) }}
```

## Accessibility acceptance criteria

The crest image itself must be presentational and ignored by screen readers.

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
|text|string|Yes|If `html` is set, this is not required. Text to use within the modal dialogue. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the modal dialogue. If `html` is provided, the `text` argument will be ignored.|
|href|string|No|The URL of the resource.|
|crest|string|No|See [crest and brand options](#crest-and-brand-options)|
|brand|string|No|See [crest and brand options](#crest-and-brand-options)|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Link
|Name|Type|Required|Description|
|---|---|---|---|
|attributes|object|No|HTML attributes (for example data attributes) to add to the anchor tag.|

## Crest and brand options

See [crest and brand options](https://github.com/simonwhatley/govuk-publishing-frontend/blob/master/docs/brand/crest-and-brand-options.md)

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
