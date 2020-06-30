# Expander

A block of content that can be expanded and collapsed.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/expander/)

## Example usage

```
{% call govukPubExpander({
  heading: {
    text: "Example 1"
  }
}) %}

  <p class="govuk-body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

{% endcall %}
```

**JavaScript**
```html
<script src="/public/javascripts/components/expander/expander.js"></script>
<script type="text/javascript">
  var $element = $('#expander');
  var expander = new GOVUK.Modules.Expander();
  expander.start($element);
</script>
```

## Accessibility acceptance criteria

The component must:

- indicate that it is expandable/collapsible
- indicate the initial state of expandable content
- indicate where the state of expandable content has changed
- be operable with a keyboard
- be expanded by default without Javascript enabled

## Arguments

This component accepts the following arguments.

|Name|Type|Required|Description|
|---|---|---|---|
|heading|object|Yes|See [heading](#heading)|
|showOnLoad|boolean|No|Show the content of the expander. Defaults to `false` (collapsed).|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|
|classes|string|No|Classes to add to the heading tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the heading tag.|


*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
