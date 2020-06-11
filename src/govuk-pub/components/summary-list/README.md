# Summary list

Use the summary list to summarise information, for example, a user’s responses at the end of a form.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/summary-list/)

## Example usage

```
{{ govukPubSummaryList({
  heading: {
    text: 'Title, summary and body'
  },
  actions: [
    {
      href: "#",
      text: "Change",
      visuallyHiddenText: "title, summary and body"
    },
    {
      href: "#",
      text: "Delete",
      visuallyHiddenText: "title, summary and body"
    }
  ],
  rows: [
    {
      key: {
        text: "Title"
      },
      value: {
        text: "Ethical standards for public service providers"
      }
    },
    {
      key: {
        text: "Summary"
      },
      value: {
        text: "Find out more about our reviews on the subject of ethical standards for public service providers, including our 2014 report, 2015 guidance and 2018 follow-up publication."
      }
    },
    {
      key: {
        text: "Body"
      },
      value: {
        text: "After the government decided in 2013 to expand the remit of the Committee to include public service providers, the Committee on Standards in Public Life produced our first report on the issue: Ethical Standards for Providers of Public Services in 2014."
      }
    }
  ]
}) }}
```

## GOV.UK Design System

This component incorporates components from the [GOV.UK Design System](https://design-system.service.gov.uk/):

- [Summary list](https://design-system.service.gov.uk/components/summary-list)

## Accessibility acceptance criteria

Action links in the component must:

- indicate what the action refers to (e.g. Change *name*)

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

See the Nunjucks arguments for the [summary list component](https://design-system.service.gov.uk/components/summary-list)

### Heading 

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|
|actions|array|No|Array of action item objects. See [summary list component](https://design-system.service.gov.uk/components/summary-list) docs|
|classes|string|No|Classes to add to the heading. Defaults to `govuk-heading-m`|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
