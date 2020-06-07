# Subscription links

Displays links to ‘Get email alerts’ and ‘Subscribe to feed’.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/subscription-links/)

## Example usage

```
{{ govukPubSubscriptionLinks({
  email: {
    text: 'Get email alerts',
    href: '#'
  },
  feed: {
    text: 'Subscribe to feed',
    href: '#'
  }
}) }}
```

## Accessibility acceptance criteria

Icons in subscription links must be presentational and ignored by screen readers.

Toggle elements in the component must:

- be usable with a keyboard
- be usable with touch
- be recognised by screen readers as a button
- announce to screen readers whether they are expanded or collapsed
- show hidden elements by default when Javascript is disabled

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
|title|object|No||
|email|object|No|Options for the email item. See [email or feed](#email-or-feed).|
|feed|object|No|Options for the feed item. See [email or feed](#email-or-feed).|
|small|boolean|No|Whether to show the subscription links smaller.|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Title

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the title. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the title. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|

### Email or feed

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the item. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the item. If `html` is provided, the `text` argument will be ignored.|
|href|string|No|The URL of the resource.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
