# Step by step navigation related

Links to step by step navigations that a page is part of.

The component is designed to go on a content page to accompany a small step by step navigation in a sidebar. It provides links to one or more step by step navigation pages.

The component has two uses:

- above the step by step navigation sidebar, it provides a link to the main step by step navigation
- below the step by step navigation sidebar, it shows and links to any other step by step navigations that this page belongs to

In the first use case, only one link should be present and the entire text of the component should be contained in a heading. In the second use case, if more than one link is provided, the links should be shown in a list, separate from the heading.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/step-by-step-navigation-related/)

## Example usage

```
{{ appStepByStepNavigationRelated({
  items: [{
    text: 'Learn to drive a car: step by step',
    href: '#'
  }]
}) }}
```

## Accessibility acceptance criteria

The component must:

- display a single link as part of a heading
- display multiple links outside of a heading in a separate list

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

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
