# Translation navigation

Displays a list of links to available translations.

[Preview the component](https://govuk-publishing-frontend.herokuapp.com/components/translation-navigation/)

## Example usage

**Macro**
```
{{ govukPubTranslationNavigation({
  items: [{
    href: '#',
    text: 'English',
    locale: 'en',
    active: true
  }, {
    href: '#',
    text: 'Cymraeg',
    locale: 'cy'
  }]
}) }}
```

## Accessibility acceptance criteria

The component must:

- be [a landmark with a navigation role](https://accessibility.blog.gov.uk/2016/05/27/using-navigation-landmarks/)
- have an accessible name in the current language, eg ‘Translations’

The translation links must:

- [identify the language of the text](https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html#meaning-other-lang-id-examples-head)

[Watch a screen reader pronounce text differently based on lang attribute](https://bit.ly/screenreaderpronunciation)

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
|brand|string|No|See [brand options](#brand-options)|
|inverse|boolean|No|Default is `false`. Setting this to `true` renders the navigation as white text on a blue background.|
|items|array|Yes|An array of language item objects. See [items](#items).|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Items

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the item. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the item. If `html` is provided, the `text` argument will be ignored.|
|locale|string|Yes|The language of the text.|
|active|boolean|Yes|The active property indicating the current language.|
|classes|string|No|Classes to add to the list item tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the list item tag.|

## Brand options

Use the following brand codes to display the appropriate organisation brand colours.

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