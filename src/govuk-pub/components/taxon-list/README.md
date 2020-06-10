# Taxon list

Displays a list of taxons.

A taxon is defined as a single node in the new taxonomy structure or, more simply, a topic or category that content can be tagged to.

This component can be used to surface a list of links to related content within the taxonomy.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/taxon-list/)

## Example usage

```
{{ govukPubTaxonList({
  items: [{
    href: '#',
    heading: {
      text: 'Adult Dependants’ Grant'
    },
    description: {
      text: 'Adult Dependants’ Grant for full-time students who financially support an adult - funding, how to apply, eligibility'
    }
  }, {
    href: '#',
    heading: {
      text: 'Care to Learn'
    },
    description: {
      text: 'Care to Learn helps pay for childcare while you’re studying - how to apply, money you get, courses that qualify, eligibility'
    }
  }, {
    href: '#',
    heading: {
      text: 'Childcare Grant'
    },
    description: {
      text: 'Childcare Grants for full-time students in higher education - grants, CCG1, CCG2 forms, how to apply, eligibility'
    }
  }]
}) }}
```

## Accessibility acceptance criteria

Taxon list items must:

- not use headings when there is no description
- use the correct heading level for the page when a description is provided

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
|items|array|Yes|See [items](#items)|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Items

|Name|Type|Required|Description|
|---|---|---|---|
|heading|object|Yes|Options for the heading element. See [headings](#headings)|
|description|object|No|Options for the description element. See [description](#description)|
|classes|string|No|Classes to add to the item.|

#### Headings

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the item. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the item. If `html` is provided, the `text` argument will be ignored.|
|href|string|Yes|The location of the resource.|
|classes|string|No|Classes to add to the list item tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the list item tag.|

#### Description

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the description. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the description. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the description.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
