# Copt to clipboard

Content that a user is intended to copy, like a URL.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/copy-to-clipboard/)

## Example usage

```
{{ govukPubCopyToClipboard({
  id: 'example-1',
  input: {
    id: 'example-1-input',
    name: 'example-1-input',
    label: {
      text: 'Copy and send this link to someone and they’ll be able to preview your draft on GOV.UK.'
    },
    value: 'https://www.example.com',
    attributes: {
      readonly: 'readonly'
    }
  },
  button: {
    text: 'Copy link'
  }
}) }}
```

## Accessibility acceptance criteria

- should be usable with keyboard

## Arguments

This component uses the [text input component](https://design-system.service.gov.uk/components/text-input/) and [button component](https://design-system.service.gov.uk/components/button/) from the GOV.UK Design System.


*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
