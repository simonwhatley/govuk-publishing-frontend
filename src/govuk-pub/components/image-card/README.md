# Image card

Displays an image and associated text with a link.

An image and links, meant for use for news articles and people. Includes optional paragraph and additional links.

The component is generally to be used within a grid column but has no grid of its own, so the text and the images in the examples below may not always line up. This will normally look tidier, for example on [pages like this](https://www.gov.uk/government/organisations/attorney-generals-office).

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/image-card/)

## Example usage

```
{{ appImageCard({
  href: '#',
  heading: {
    text: 'Lorem ispum dolor emit',
    headingLevel: '3'
  },
  image: {
    src: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/feature/image/62756/s300_courts-of-justice.JPG',
    alt: 'Royal Courts of Justice'
  }
}) }}
```

## Accessibility acceptance criteria

The component must:

- include alt text for images when present
- not have duplicate links for the image and the text

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
|href|string|Yes|The URL of the resource.|
|brand|string|No|See [brand options](#brand-options)|
|heading|object|Yes|See [heading](#heading)|
|description|object|No|See [description](#description)|
|image|object|Yes|See [image](#image)|
|links|object|No|See [links](#links)|
|metadata|object|No|See [metadata](#metadata)|
|large|boolean|No|Default is `false`. Setting this to `true` renders a large version of the card.|
|extraLinksNoIndent|boolean|No|Default is `false`.|
|classes|string|No|Classes to add to the container tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container tag.|

### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|
|classes|string|No|Classes to add to the heading.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the heading.|

### Description

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the description. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the description. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the container tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container tag.|

### Image

|Name|Type|Required|Description|
|---|---|---|---|
|src|string|Yes|The source URL for the image.|
|alt|string|Yes|A text description for the image.|
|classes|string|No|Classes to add to the image tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the image tag.|

### Links

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the link. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the link. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the list item tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the list item tag.|

### Metadata

|Name|Type|Required|Description|
|---|---|---|---|
|public_updated_at|timestamp|No|The date the image was updated.|
|document_type|string|No|The type of image.|

## Brand options

Use the following brand codes to display the appropriate organisation brand colours.

|Department|Brand|
|---|---|
|Attorney General's Office|`attorney-generals-office`|
|Cabinet Office|`cabinet-office`|
|Department for Business, Energy & Industrial Strategy|`department-for-business-innovation-skills`|
|Department for Digital, Culture, Media & Sport|`department-for-culture-media-sport`|
|Department for Education|`department-for-education`|
|Department for Environment, Food & Rural Affairs|`department-for-environment-food-rural-affairs`|
|Department for Exiting the European Union|`department-of-energy-climate-change`|
|Department for International Development|`department-for-international-development`|
|Department for International Trade|`department-for-international-trade`|
|Department for Transport|`department-for-transport`|
|Department for Work & Pensions|`department-for-transport`|
|Department of Health & Social Care|`department-of-health`|
|Foreign & Commonwealth Office|`foreign-commonwealth-office`|
|Government Legal Department|`attorney-generals-office`|
|HM Revenue & Customs|`hm-revenue-customs`|
|HM Treasury|`hm-treasury`|
|Home Office|home-office`|
|Ministry of Defence|ministry-of-defence`|
|Ministry of Housing, Communities & Local Government|`department-for-communities-and-local-government`|
|Ministry of Justice|`ministry-of-justice`|
|Northern Ireland Office|`northern-ireland-office`|
|Office of the Advocate General for Scotland|office-of-the-advocate-general-for-scotland`|
|Office of the Leader of the House of Commons|`the-office-of-the-leader-of-the-house-of-commons`|
|Office of the Leader of the House of Lords|`office-of-the-leader-of-the-house-of-lords`|
|Office of the Secretary of State for Scotland|`scotland-office`|
|Office of the Secretary of State for Wales<br>Swyddfa Ysgrifennydd Gwladol Cymru|`wales-office`|
|Prime Minister's Office – 10 Downing Street|`cabinet-office`|
|Treasury Solicitor's Department|`attorney-generals-office`|
|UK Atomic Energy Authority|`department-for-business-innovation-skills`|
|UK Export Finance|`department-for-international-trade`|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
