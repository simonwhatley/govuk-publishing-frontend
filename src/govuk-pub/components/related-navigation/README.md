# Related navigation

Displays related content including topics, guidance and collections.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/related-navigation/)

## Example usage

**Macro**
```
{{ govukPubRelatedNavigation({
  sections: [{
    heading: {
      text: 'Explore the topic'
    },
    items: [{
      heading: {
        text: 'Driving licences'
      },
      href: '#'
    },{
      heading: {
        text: 'Driving tests and learning to drive or ride'
      },
      href: '#'
    }]
  }]
}) }}
```

<!-- **JavaScript**
```html
<script src="/public/javascripts/toggle.js"></script>
<script type="text/javascript">
  var $element = $('#related-navigation-toggle');
  var toggle = new GOVUK.Modules.Toggle();
  toggle.start($element);
</script>
``` -->

## Accessibility acceptance criteria

- Should have a role of ‘navigation’ on any navigation elements inside the component
- Should be marked up as navigation and not as tangential content

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
