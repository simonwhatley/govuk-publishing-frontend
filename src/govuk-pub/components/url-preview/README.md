# URL Preview

Generates URL from an input value and validates it with a server endpoint.

This component uses a text input field to get the input value, sends the value to a server endpoint and returns the appropriate response.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/url-preview/)

## Example usage

```
{{ govukPubUrlPreview({
  url: {
    root: "https://www.example.com",
    path: "/path/to-resource"
  }
}) }}
```

## Accessibility acceptance criteria

The component must:

- update its content to reflect changes in the referenced input field

## Arguments

This component accepts the following arguments.

|Name|Type|Required|Description|
|---|---|---|---|
|url|object|Yes|See [url](#url)|
|heading|object|No|See [heading](#heading)|
|defaultMessage|object|No|See [default message](#default-message)|
|errorMessage|object|No|See [error message](#error-message)|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### URL

|Name|Type|Required|Description|
|---|---|---|---|
|root|string|No|Defaults to `https://www.gov.uk`|
|path|string|Yes|The path to the resource.|

### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the heading.|

### Default message

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the message. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the message. If `html` is provided, the `text` argument will be ignored.|

### Error message

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the message. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the message. If `html` is provided, the `text` argument will be ignored.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
