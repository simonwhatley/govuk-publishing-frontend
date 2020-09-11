import { nodeListForEach } from './common.js'
// import RelatedNavigation from './components/related-navigation/related-navigation'

// EXAMPLE
// import Button from './components/button/button'

function initAll (options) {
  // Set the options to an empty object by default if no options are passed.
  options = typeof options !== 'undefined' ? options : {}

  // Allow the user to initialise GOV.UK Publishing Frontend in only certain sections of the page
  // Defaults to the entire document if nothing is set.
  var scope = typeof options.scope !== 'undefined' ? options.scope : document

  // EXAMPLE
  // var $buttons = scope.querySelectorAll('[data-module="govuk-button"]')
  // nodeListForEach($buttons, function ($button) {
  //   new Button($button).init()
  // })

  // var $navigation = scope.querySelectorAll('[data-module="govuk-pub-related-navigation"]')
  // nodeListForEach($navigation, function ($item) {
  //   new RelatedNavigation($item).init()
  // })

}

export {
  initAll
  // ,RelatedNavigation
}
