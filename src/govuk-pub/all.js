import { nodeListForEach } from './helpers';

// EXAMPLE
// import Button from './components/button/button'

function initAll (options) {
  // Set the options to an empty object by default if no options are passed.
  options = typeof options !== 'undefined' ? options : {}

  // Allow the user to initialise GOV.UK Frontend in only certain sections of the page
  // Defaults to the entire document if nothing is set.
  var scope = typeof options.scope !== 'undefined' ? options.scope : document

  // EXAMPLE
  // var $buttons = scope.querySelectorAll('[data-module="govuk-button"]')
  // nodeListForEach($buttons, function ($button) {
  //   new Button($button).init()
  // })

}

export {
  initAll
  // EXAMPLE
  // , Button
}
