# Highlight boxes

Displays content item details in a grid of highlight boxes, with a max of 3 items per row.

The highlight boxes have several optional flags which can be set:

- Inverse - renders the highlight boxes as white text on a blue background
- Featured - renders a specific highlight box with larger font size

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/highlight-boxes/)

## Example usage

```
{{ govukPubHighlightBoxes({
  items: [{
    href: '#',
    heading: {
      text: 'Lorem ipsum dolor sit amet 1'
    },
    metadata: {
      document_type: 'Speech'
    }
  },
  {
    href: '#',
    heading: {
      text: 'Lorem ipsum dolor sit amet 2'
    },
    metadata: {
      document_type: 'Policy paper'
    }
  },
  {
    href: '#',
    heading: {
      text: 'Lorem ipsum dolor sit amet 3'
    },
    metadata: {
      document_type: 'Guide'
    }
  }]
}) }}
```

## Accessibility acceptance criteria

The highlight boxes must:

- be visually distinct from other content on the page
- have a text contrast ratio higher than 4.5:1 against the background colour to meet [WCAG 2.1 level AA](https://www.w3.org/TR/WCAG21/)

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
|items|array|Yes|An array of content item objects. See [items](#items).|
|inverse|boolean|No|Default is `false`. Setting this to `true` renders the highlight boxes as white text on a blue background.|
|classes|string|No|Classes to add to the list tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the list tag.|

### Items

|Name|Type|Required|Description|
|---|---|---|---|
|href|string|Yes|The URL of the resource.|
|heading|object|Yes|See [heading](#heading)|
|description|object|Yes|See [description](#description)|
|featured|boolean|No|Default is `false`. Setting this to `true` renders a specific highlight box with larger font size.|
|metadata|object|No|Metadata to display for each item. Options include: `document_type`, `organisation` and `public_updated_at`.|
|classes|string|No|Classes to add to the line item (`<li>`).|
|attributes|object|No|HTML attributes (for example data attributes) to add to the line item (`<li>`).|

#### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the list item tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the list item tag.|

#### Description

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the description. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the description. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the description paragraph tag.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
