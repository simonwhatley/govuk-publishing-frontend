# Publisher metadata

Used to display a list of publication dates and publishers.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/publisher-metadata/)

## Example usage

**Macro**
```
{{ govukPubPublisherMetadata({
  published: {
    text: 'Published',
    timestamp: '1990-01-01T15:42:37.000+00:00'
  },
  lastUpdated: {
    text: 'Last updated',
    timestamp: '2016-10-20T12:15:42.000+00:00'
  },
  sections: [{
    heading: {
      text: 'From'
    },
    items: [{
      heading: {
        text: 'Ministry of Defence'
      },
      href: '#'
    }, {
      heading: {
        text: 'Ministry of Justcice'
      },
      href: '#'
    }, {
      heading: {
        text: 'Cabinet Office'
      },
      href: '#'
    }]
  }]
}) }}
```

## Accessibility acceptance criteria

The metadata component must:

- indicate that any expandable content can be expanded or collapsed
- indicate the initial state of expandable content
- indicate where the state of expandable content has changed

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

[See the arguments for the ‘published dates’ component](../published-dates/README.md)

|Name|Type|Required|Description|
|---|---|---|---|
|sections|object|No|See [sections](#sections)|
|inverse|boolean|No|Default is `false`. Setting this to `true` renders the metadata as white text on a blue background.|
|direction|string|No|If set to ‘rtl’, content will be displayed right to left.|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Sections

|Name|Type|Required|Description|
|---|---|---|---|
|heading|object|Yes|See [heading](#heading)|
|items|object|No|See [items](#items)|
|limit|object|No|See [limit](#limit)|
|itemSeparator|string|No|Defaults to ‘and’|

#### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|
|classes|string|No|Classes to add to the heading.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the heading.|

#### Items

|Name|Type|Required|Description|
|---|---|---|---|
|href|string|Yes|The URL of the resource.|
|heading|object|Yes|See [item heading](#item-heading)|
|attributes|object|No|HTML attributes (for example data attributes) to add to the anchor.|

##### Item heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the item heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the item heading. If `html` is provided, the `text` argument will be ignored.|

#### Limit

|Name|Type|Required|Description|
|---|---|---|---|
|count|numeric|Yes|The number of items.|
|aria-controls|boolean|Yes|Used to toggle show/hide functionality.|
|aria-expanded|string|Yes|Default to `false`. Used to toggle show/hide functionality.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
