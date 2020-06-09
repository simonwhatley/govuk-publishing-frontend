# Taxonomy list

Wraps the [highlight box](https://govuk-publishing-frontend.herokuapp.com/components/highlight-boxes/), [document list](https://govuk-publishing-frontend.herokuapp.com/components/document-list/) and [image card](https://govuk-publishing-frontend.herokuapp.com/components/image-card/) components in one list. This is commonly used on topic pages for links to tagged content.

The [highlight box](../highlight-boxes/README.md), [document list](../document-list/README.md) and [image card](../image-card/README.md) components are standalone components.

However, there are some use cases where we want to use these components together to render one list of links. This is not possible when using the components separately. This component wraps these components in one list, and applies relevant styling to get them to display appropriately together.

**Note**: At the moment, this component only works when displaying either highlight box + document list or image cards + document list. The layout for combining all three together hasn’t been fixed.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/taxonomy-list/)

## Example usage

```
{{ govukPubTaxonomyList({
  highlights: {
    inverse: true,
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
  },
  documents: {
    items: [{
      href: '#',
      heading: {
        text: 'Document 1'
      },
      metadata: {
        document_type: 'Statutory guidance'
      }
    },
    {
      href: '#',
      heading: {
        text: 'Document 2'
      },
      metadata: {
        document_type: 'Statutory guidance'
      }
    },
    {
      href: '#',
      heading: {
        text: 'Document 3'
      },
      metadata: {
        document_type: 'Statutory guidance'
      }
    }]
  }
}) }}
```

## Accessibility acceptance criteria

The taxonomy list should:

- wrap all links in one list
- should not be used to display links that don’t belong together in one list

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
|documents|object|No|See [Document list](../document-list/README.md) component.|
|highlights|object|No|See [Highlight boxes](../highlight-boxes/README.md) component.|
|imageCards|object|No|See [Image cards](../image-card/README.md) component|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
