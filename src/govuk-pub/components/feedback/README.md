# Feedback

Invites a user feedback on the current page.

This component is designed to sit at the bottom of pages on GOV.UK to allow users to submit feedback on that page. It is based on the ‘improve this page’ component from the Service manual.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/feedback/)

## Example usage

**Macro**
```
{{ govukPubFeedback({
  id: 'feedback'
}) }}
```

**JavaScript**
```html
<script src="/public/javascripts/components/feedback/feedback.js"></script>
<script type="text/javascript">
  var $element = $('#feedback');
  var feedback = new GOVUK.Modules.Feedback();
  feedback.start($element);
</script>
```

## Accessibility acceptance criteria

Form elements in the component must:

- accept focus
- be focusable with a keyboard
- be usable with a keyboard
- be usable with touch
- indicate when they have focus
- be recognisable as form input elements
- have correctly associated labels
- be of the appropriate type for their use, e.g. password inputs should be of type ‘password’

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
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
