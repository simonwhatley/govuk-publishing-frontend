# Page preview

Preview a page on mobile, desktop and Google.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/page-preview/)

## Example usage

```
{{ govukPubPagePreview({
  href: "https://www.gov.uk/browse"
}) }}
```

## Accessibility acceptance criteria

Iframes in this component must:

- have a title

## Arguments

This component accepts the following arguments.

|Name|Type|Required|Description|
|---|---|---|---|
|id|string|No|This is used for the tab component and to compose id attribute for each item.|
|idPrefix|string|No|String to prefix id for each tab item if no id is specified on each item.|
|title|string|No|Title for the tabs table of contents.|
|href|string|Yes|The URL of the resource.|
|snippet|object|Yes|The search engine snippet. See [search snippet](#search-snippet).|
|containerClasses|string|No|Classes to add to the container.|
|classes|string|No|Classes to add to the tabs.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the tabs.|

### Search snippet

|Name|Type|Required|Description|
|---|---|---|---|
|title|string|No|Title for the snippet.|
|description|string|No|Description for the snippet.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
