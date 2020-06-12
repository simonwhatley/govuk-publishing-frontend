/* global ga:readonly */

function EscapeLink ($module) {
  this.$module = $module
}

EscapeLink.prototype.init = function () {
  var $module = this.$module

  if (!$module) {
    return
  }
  $module.addEventListener('click', this.handleClick.bind(this))
}

EscapeLink.prototype.handleClick = function (event) {
  event.preventDefault()

  var url = event.target.getAttribute('href')
  var rel = event.target.getAttribute('rel')
  var trackLabel = event.target.getAttribute('data-track-label')

  this.trackLink(trackLabel)
  this.openNewPage(url, rel)
  this.replaceCurrentPage(url)
}

EscapeLink.prototype.trackLink = function (trackLabel) {
  if (typeof ga === 'function' && trackLabel) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'leave_site',
      eventAction: '',
      eventLabel: trackLabel
    })
  }
}

EscapeLink.prototype.openNewPage = function (url, rel) {
  var newWindow = window.open(url, rel)
  newWindow.opener = null
}

EscapeLink.prototype.replaceCurrentPage = function (url) {
  window.location.replace(url)
}

var $escapeLink = document.querySelector('[data-module="govuk-pub-escape-link"]')
new EscapeLink($escapeLink).init()
