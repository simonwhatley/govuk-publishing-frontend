# Action link

Use action links to help users get to the next stage of a journey quickly.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/action-link/)

## Example

```
{{ govukPubActionLink({
  heading: {
    text: "Go to NHS 111 online",
    href: "https://www.example.com"
  }
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
|inverse|boolean|No|Default is `false`. Setting this to `true` renders the highlight boxes as white text on a blue background.|
|mobile|boolean|no|Default is `false`. Setting this to `true` renders the description below the heading.|
|simple|boolean|no|Default is `false`. Setting this to `true` renders a plain arrow marker.|
|nhs|boolean|no|Default is `false`. Setting this to `true` renders an NHS icon.|
|heading|object|Yes|Options for the heading. See [heading](#heading)|
|description|object|Yes|Options for the description. See [description](#description)|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the anchor link. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the anchor link. If `html` is provided, the `text` argument will be ignored.|
|href|string|Yes|The location of the resource.|
|classes|string|No|Classes to add to the heading wrapper.|
|anchorClasses|string|No|Classes to add to the anchor link. Ignored if no `href` is specified.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the anchor link. Ignored if no `href` is specified.|

### Description

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the description. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the description. If `html` is provided, the `text` argument will be ignored.|
|href|string|Yes|The location of the resource.|
|classes|string|No|Classes to add to the subtext wrapper.|
|anchorClasses|string|No|Classes to add to the anchor link. Ignored if no `href` is specified.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the anchor link. Ignored if no `href` is specified.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
