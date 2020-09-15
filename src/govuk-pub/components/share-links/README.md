# Share links

Displays links for linking to or sharing the current page on social media.

The component will not process a URL into a share link itself. Pass complete share URLs to the component.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/share-links/)

## Example usage

```
{{ govukPubShareLinks({
  items: [{
    text: 'Facebook',
    icon: 'facebook',
    href: '#'
  },{
    text: 'Twitter',
    icon: 'twitter',
    href: '#'
  }]
}) }}
```

## Accessibility acceptance criteria

The share link icons must be presentational and ignored by screen readers.

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
|items|object|Yes|Options for the item elements. See [items](#items)|
|brand|string|No|See [brand options](#brand-options)|
|stacked|boolean|No|Default is `false`. If set to `true` items will be stacked vertically.|
|columns|boolean|No|Default is `false`. If set to `true` items will layout in a grid.|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Items

|Name|Type|Required|Description|
|---|---|---|---|
|href|string|No|The URL of the resource.|
|text|string|Yes|If `html` is set, this is not required. Text to use within the item. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the item. If `html` is provided, the `text` argument will be ignored.|
|icon|string|No|The icon to display. Options include: `facebook`, `twitter`, `whatsapp`, `instagram`, `linkedin`, `youtube`, `flickr` and `email`.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the item anchor.|

## Brand options

See [crest and brand options](https://github.com/simonwhatley/govuk-publishing-frontend/blob/master/docs/brand/crest-and-brand-options.md)

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
