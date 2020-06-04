# GOV.UK Publishing Frontend

GOV.UK Publishing Frontend contains the code you need to start building user interfaces for UK government services. It is an amalgamation of components and patterns described in GOV.UK component guides.

See live examples of GOV.UK Publishing Frontend components, and guidance on when to use them in your service, in the [GOV.UK Publishing Frontend](https://govuk-publishing-frontend.herokuapp.com/).

## Contact the team

GOV.UK Publishing Frontend is maintained by Simon Whatley. If you need support email support@humanedesign.co

## Quick start

We recommend [installing GOV.UK Publishing Frontend using node package manager (npm)](https://github.com/simonwhatley/govuk-publishing-frontend/blob/master/docs/installation/installing-with-npm.md).

Once installed, you will be able to use the code from the examples in the [GOV.UK Publishing Frontend](https://govuk-publishing-frontend.herokuapp.com/) in your service.

## Browser support

GOV.UK Publishing Frontend will allow you to build services that comply with the [guidance in the Service Manual](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices#browsers-to-test-in).

If you are including GOV.UK Publishing Frontend as part of a stylesheet that you are generating in your application's build pipeline, you will need to [generate and include a separate stylesheet in order to support Internet Explorer 8](docs/installation/supporting-internet-explorer-8.md).

## Assistive technology support

GOV.UK Publishing Frontend will allow you to build services that comply with the [guidance in the Service Manual](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#what-to-test).

In addition, we test that all content is accessible with keyboard only.

We aim to support [users who adjust or override the colours of websites they visit](https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/). We test this by [changing colours in Firefox](https://support.mozilla.org/en-US/kb/change-fonts-and-colors-websites-use), by [enabling 'High Contrast' mode in Windows](https://support.microsoft.com/en-gb/help/13862/windows-use-high-contrast-mode) and by using the [High Contrast plugin for Chrome](https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph?hl=en-US).

## Getting updates

To be notified when there’s a new release, you can [watch the govuk-publishing-frontend Github repository](https://help.github.com/en/articles/watching-and-unwatching-repositories).

Find out how to [update with npm](https://frontend.design-system.service.gov.uk/updating-with-npm/).

## Contribution guidelines

If you want to help us build GOV.UK Publishing Frontend, view our [contribution guidelines](https://github.com/simonwhatley/govuk-publishing-frontend/blob/master/CONTRIBUTING.md).

If you’ve got an idea or suggestion you can:

- Email contribute@humanedesign.co putting the repository name in the subject line.
- [Create a GitHub issue](https://github.com/simonwhatley/govuk-publishing-frontend/issues).

### Further reading

- [Component principles](https://github.com/alphagov/govuk_publishing_components/blob/master/docs/component_principles.md)
- [Component conventions](https://github.com/alphagov/govuk_publishing_components/blob/master/docs/component_conventions.md)

## Licence
Unless otherwise stated, this codebase is released under the [MIT License](https://github.com/simonwhatley/govuk-publishing-frontend/blob/master/LICENSE). This covers both the codebase and any sample code in the documentation.