window.GOVUK = window.GOVUK || {}
window.GOVUK.Modules = window.GOVUK.Modules || {};

(function (Modules) {
  'use strict'

  Modules.CopyToClipboard = function () {
    this.start = function (element) {
      var input = element[0].querySelector('.govuk-pub-input')
      var copyButton = element[0].querySelector('.govuk-pub-button')

      input.addEventListener('click', function () {
        input.select()
      })

      copyButton.addEventListener('click', function (event) {
        event.preventDefault()
        input.select()
        document.execCommand('copy')
      })
    }
  }
})(window.GOVUK.Modules)
