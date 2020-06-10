# Inverse header

A wrapper to contain header content in white text.

This component can be passed a block of template code and will wrap it in a blue header. This is as light-touch as possible and doesn’t attempt to deal with the margins and paddings of its content. White text is enforced on content and would need to be overridden where unwanted. Implemented to accommodate topic and list page headings and breadcrumbs but un-opinionated about its contents.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/inverse-header/)

## Example usage

```
{% call govukPubInverseHeader({
  fullWidth: true
}) %}

//HTML...

{% endcall %}
```

## Accessibility acceptance criteria

The component must:

be used in conjunction with content that renders a text contrast ratio higher than 4.5:1 against the header colour to meet [WCAG 2.1 level AA](https://www.w3.org/TR/WCAG21/).

## Arguments

This component accepts the following arguments.

|Name|Type|Required|Description|
|---|---|---|---|
|fullWidth|boolean|No|Default is `false`.|
|classes|string|No|Classes to add to the header container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the header container.|


*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
