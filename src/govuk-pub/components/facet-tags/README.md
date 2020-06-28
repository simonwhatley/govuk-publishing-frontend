# Facet tags

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/facet-tags/)

## Example usage

```
{{ govukPubFacetTags({
  facets: [{
    items: [{
      label: {
        text: 'Aerospace and space'
      }
    }]
  }]
}) }}
```

## Accessibility acceptance criteria

## Arguments

This component accepts the following arguments.

|Name|Type|Required|Description|
|---|---|---|---|
|facets|array|Yes|An array of items. See [facets](#facets).|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Facets

|Name|Type|Required|Description|
|---|---|---|---|
|heading|object|Yes|See [heading](#heading)|
|preposition|string|No|The preposition to be used between facet tags. Defaults to ‘or’.|
|items|array|Yes|An array of item objects. See [items](#items).|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

#### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|

#### Items

|Name|Type|Required|Description|
|---|---|---|---|
|label|object|Yes|See [label](#label)|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

##### Label

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the label.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the label.|

##### Button

|Name|Type|Required|Description|
|---|---|---|---|
|label|object|Yes|See [button label](#button-label)|
|classes|string|No|Classes to add to the button.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the button.|

###### Button label

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the button label. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the button label. If `html` is provided, the `text` argument will be ignored.|


*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
