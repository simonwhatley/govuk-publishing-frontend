# Header

The header provides the crown logo, product or service name and navigation.

Requires the specification of the environment (development, integration, staging or production).

[Preview the component](https://govuk-content-publisher.herokuapp.com/components/header/)

## Example usage

```

```

## Accessibility acceptance criteria

The component must:

- have a text contrast ratio higher than 4.5:1 against the background colour to meet [WCAG level AA](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast)

Images in the Header must:

- be presentational when linked to from accompanying text (crown icon).

Landmarks and Roles in the Header should:

- have a role of `banner` at the root of the component (`<header>`) ([ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/#banner))

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
|organisationName|object|Yes||
|serviceName|object|Yes||
|navigation|array|No||
|environment|string|No|Defaults to `development`.|
|href|string|Yes|The location of the resource. Defaults to `/`|
|containerClasses|string|No|Classes to add to the container.|
|classes|string|No|Classes to add to the header tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the header tag.|

### Organisation name

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|

### Service name

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|

### Navigation

|Name|Type|Required|Description|
|---|---|---|---|
|id|string|No|Defaults to `navigation`|
|label|string|No||
|items|array|No|See [items](#items)|
|classes|string|No|Classes to add to the navigation list.|

#### Items

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the anchor link. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the anchor link. If `html` is provided, the `text` argument will be ignored.|
|href|string|Yes|The location of the resource.|
|active|boolean|No||
|collapsedMenuOnly|boolean|No||


*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
