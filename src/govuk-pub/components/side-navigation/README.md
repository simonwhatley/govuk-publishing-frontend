# Side navigation

Component showing a secondary navigation in a side of the page.

[Preview the component](https://govuk-content-publisher.herokuapp.com/components/side-navigation/)

## Example usage

```

```

## Accessibility acceptance criteria

The component must:

- have a role of ‘navigation’ on any navigation elements inside the component
- be marked up as navigation and not as tangential content

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
|items|array|No|An array of navigation item objects. See [items](#items)|
|classes|string|No|Classes to add to the navigation tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the navigation tag.|

### Items

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the anchor link. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the anchor link. If `html` is provided, the `text` argument will be ignored.|
|href|string|Yes|The location of the resource.|
|active|boolean|No|Flag to mark the navigation item as active or not. Defaults to `false`.|
|classes|string|No|Classes to add to the list item tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the anchor link.|


*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
