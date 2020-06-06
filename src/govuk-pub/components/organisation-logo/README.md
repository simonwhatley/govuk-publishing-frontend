# Organisation logo

Displays an organisation logo: text with crest and branded border colour.

Organisation name must be provided with pre-formatted line breaks. These cannot be inferred from the name alone.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/organisation-logo/)

## Example usage

```
{{ govukPubOrganisationLogo({
  text: 'Cabinet Office',
  href: '#',
  crest: 'single-identity',
  brand: 'cabinet-office'
}) }}
```

## Accessibility acceptance criteria

The crest image itself must be presentational and ignored by screen readers.

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
|text|string|Yes|If `html` is set, this is not required. Text to use within the modal dialogue. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the modal dialogue. If `html` is provided, the `text` argument will be ignored.|
|href|string|No|The URL of the resource.|
|crest|string|No|See [crest and brand options](#crest-and-brand-options)|
|brand|string|No|See [crest and brand options](#crest-and-brand-options)|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Link
|Name|Type|Required|Description|
|---|---|---|---|
|attributes|object|No|HTML attributes (for example data attributes) to add to the anchor tag.|

## Crest and brand options

Use the following crest and brand codes to display the appropriate organisation logo and associated brand colours.

|Department|Crest|Brand|
|---|---|---|
|Attorney General's Office|`single-identity`|`attorney-generals-office`|
|Cabinet Office|`single-identity`|`cabinet-office`|
|Department for Business, Energy & Industrial Strategy|`bis`|`department-for-business-innovation-skills`|
|Department for Digital, Culture, Media & Sport|`single-identity`|`department-for-culture-media-sport`|
|Department for Education|`single-identity`|`department-for-education`|
|Department for Environment, Food & Rural Affairs|`single-identity`|`department-for-environment-food-rural-affairs`|
|Department for Exiting the European Union|`single-identity`|`department-of-energy-climate-change`|
|Department for International Development|`single-identity`|`department-for-international-development`|
|Department for International Trade|`dit`|`department-for-international-trade`|
|Department for Transport|`single-identity`|`department-for-transport`|
|Department for Work & Pensions|`single-identity`|`department-for-transport`|
|Department of Health & Social Care|`single-identity`|`department-of-health`|
|Foreign & Commonwealth Office|`single-identity`|`foreign-commonwealth-office`|
|Government Legal Department|`single-identity`|`attorney-generals-office`|
|HM Revenue & Customs|`hmrc`|`hm-revenue-customs`|
|HM Treasury|`single-identity`|`hm-treasury`|
|Home Office|`ho`|`home-office`|
|Ministry of Defence|`mod`|`ministry-of-defence`|
|Ministry of Housing, Communities & Local Government|`single-identity`|`department-for-communities-and-local-government`|
|Ministry of Justice|`single-identity`|`ministry-of-justice`|
|Northern Ireland Office|`single-identity`|`northern-ireland-office`|
|Office of the Advocate General for Scotland|`so`|`office-of-the-advocate-general-for-scotland`|
|Office of the Leader of the House of Commons|`portcullis`|`the-office-of-the-leader-of-the-house-of-commons`|
|Office of the Leader of the House of Lords|`portcullis`|`office-of-the-leader-of-the-house-of-lords`|
|Office of the Secretary of State for Scotland|`so`|`scotland-office`|
|Office of the Secretary of State for Wales<br>Swyddfa Ysgrifennydd Gwladol Cymru|`wales`|`wales-office`|
|Prime Minister's Office – 10 Downing Street|`eo`|`cabinet-office`|
|Treasury Solicitor's Department|`org`|`attorney-generals-office`|
|UK Atomic Energy Authority|`ukaea`|`department-for-business-innovation-skills`|
|UK Export Finance|`dit`|`department-for-international-trade`|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
