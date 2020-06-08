# Contents list

Provides a list of links with options for dashes or numbering.

Commonly used to lists a page’s contents with links pointing to headings within the document, but can also be used for a list of links to other pages.

<!-- Pass a list of contents each with an href and text. The href can point at the ID of a heading within the page.

Supports nesting contents one level deep, currently only used by specialist documents. When nesting the top level list items display in bold.

format_numbers option will pull out numbers in the link text to render them as though they were the list style type. Applies to numbers at the start of text, with or without a decimal. See the format complex numbers fixture for details. -->

[Preview the component](https://govuk-website-prototype.herokuapp.com/components/contents-list/)

## Example usage

```
{{ appContentsList({
  heading: {
    text: 'Contents'
  },
  items: [{
    text: 'First thing',
    href: '#first-thing'
  }, {
    text: 'Second thing',
    href: '#second-thing',
    active: true
  }, {
    text: 'Third thing',
    href: '#third-thing'
  }]
}) }}
```

## Accessibility acceptance criteria
The component must be [a landmark with a navigation role](https://accessibility.blog.gov.uk/2016/05/27/using-navigation-landmarks/).

The contents list must:

- inform the user how many items are in the list
- convey the content structure
- indicate the current page when contents span different pages, and not link to itself

The contents list may:

- include an `aria-label` to contextualise the list if helpful

Links with formatted numbers must separate the number and text with a space for correct screen reader pronunciation. This changes pronunciation from “1 dot Item” to “1 Item”.

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
|role|string|No|Defaults to 'navigation'|
|heading|object|Yes|See [heading](#heading)|
|items|array|Yes|An array of content item objects. See [items](#items).|
|classes|string|No|Classes to add to the nav tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the anchor tag.|

### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|
|classes|string|No|Classes to add to the heading tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the heading tag.|

### Items

|Name|Type|Required|Description|
|---|---|---|---|
|href|string|Yes|URL of the item anchor. Both href and text attributes for items need to be provided to create an item.|
|text|string|Yes|If `html` is set, this is not required. Text to use within the anchor. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the anchor. If `html` is provided, the `text` argument will be ignored.|
|active|boolean|No|Flag to mark the item as active or not. Defaults to `false`.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the item anchor.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
