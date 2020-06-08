# Related navigation

Displays related content including topics, guidance and collections.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/related-navigation/)

## Example usage

**Macro**
```
{{ govukPubRelatedNavigation({
  sections: [
    {
      heading: {
        text: 'Explore the topic'
      },
      items: [
        {
          heading: {
            text: 'Driving licences'
          },
          href: '#'
        },
        {
          heading: {
            text: 'Driving tests and learning to drive or ride'
          },
          href: '#'
        }
      ]
    }
  ]
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
|id|string|No||
|heading|object|No|Options for the heading element. See [heading](#heading)|
|sections|array|Yes|See [section](#section)|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|
|classes|string|No|Classes to add to the heading.|
|attributes|object|No|HTML attributes to add to the heading.|

### Section

|Name|Type|Required|Description|
|---|---|---|---|
|heading|object|No|Options for the heading element. See [section heading](#section-heading).|
|items|array|Yes|See [item](#item)|
|limit|object|No|Limit the number of items displayed in the list.|

#### Section heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the section heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the section heading. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 3 (`<h3>`)|

#### Item

|Name|Type|Required|Description|
|---|---|---|---|
|heading|object|No|Options for the heading element. See [item heading](#item-heading).|
|href|string|Yes|The location of the related item.|
|classes|string|No|Classes to add to the item.|
|attributes|object|No|HTML attributes to add to the item.|

### Limit

|Name|Type|Required|Description|
|---|---|---|---|
|count|numeric|No|Used to limit the number of items shown before show more is used.|

##### Item heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the item heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the item heading. If `html` is provided, the `text` argument will be ignored.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
