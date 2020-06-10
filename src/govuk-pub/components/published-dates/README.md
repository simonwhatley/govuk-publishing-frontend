# Published dates

Displays dates to reflect when content was published and updated.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/published-dates/)

## Example usage

**Macro**
```
{{ govukPubPublishedDates({
  published: {
    timestamp: '1 January 1990'
  },
  lastUpdated: {
    timestamp: '20 October 2016'
  }
}) }}
```

## Accessibility acceptance criteria

The published dates component must:

- indicate to users that the full history section can be expanded and collapsed
- inform the user of the state of the full history section (expanded or collapsed)
- be usable with a keyboard

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
|published|object|Yes|See [published](#published).|
|lastUpdated|object|No|See [last updated](#last-updated).|
|linkToHistory|object|No|See [link to history](#link-to-history).|
|history|array|No|See [history](#history).|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes to add to the container.|

### Published

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` argument will be ignored.|
|timestamp|date|Yes|The date and time the document was published.|

### Last updated

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` argument will be ignored.|
|timestamp|date|Yes|The date and time the document was updated.|

### Link to history

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the anchor link. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the anchor link. If `html` is provided, the `text` argument will be ignored.|
|href|string|Yes|The location of the resource.|
|classes|string|No|Classes to add to the anchor link.|
|attributes|object|No|HTML attributes to add to the anchor link.|

### History

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the item. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the item. If `html` is provided, the `text` argument will be ignored.|
|timestamp|date|Yes|The date and time the document was published and updated.|
|classes|string|No|Classes to add to the item.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
