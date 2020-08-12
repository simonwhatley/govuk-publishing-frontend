# Installing GOV.UK Publishing Frontend with node package manager (NPM)

## Requirements

To use GOV.UK Publishing Frontend with NPM you must:

1. Install the long-term support (LTS) version of [Node.js](https://nodejs.org/en/), which includes NPM. The minimum version of Node required is 4.2.0. We recommend using [`nvm`](https://github.com/creationix/nvm) for managing versions of Node.

2. Create a [package.json file](https://docs.npmjs.com/files/package.json) if you don’t already have one. You can create a default `package.json` file by running `npm init` from the root of your application.

3. If you want to use the GOV.UK Publishing Frontend Nunjucks macros, install Nunjucks - the minimum version required is 3.0.0.

```
npm install nunjucks --save
```

## Installation

To install, run:

```
npm install @simonwhatley/govuk-publishing-frontend --save
```

After you have installed the GOV.UK Publishing Frontend, the `@simonwhatley/govuk-publishing-frontend` package will appear in your `node_modules` folder.

## Importing styles

You need to import the GOV.UK Publishing Frontend styles into the main Sass file in your project. You should place the below code before your own Sass rules (or Sass imports) if you want to override GOV.UK Publishing Frontend with your own styles.

1. To import all components, add the below to your Sass file:

```SCSS
@import "node_modules/@simonwhatley/govuk-publishing-frontend/govuk-pub/all";
```

2. To import an individual component (for example a button), add the below to your Sass file:

```SCSS
@import "node_modules/@simonwhatley/govuk-publishing-frontend/govuk-pub/components/notice/notice";
```

Note: The GOV.UK Prototyping Kit automatically handles the importing of styles through the extensions configuration.

### Optional: Resolving SCSS import paths

If you wish to resolve the above `@import` paths in your build (in order to avoid prefixing paths with `node_modules`), you should add `node_modules` to
your [Sass include paths](https://github.com/sass/node-sass#includepaths) (in Ruby, they should be added to [assets paths](http://guides.rubyonrails.org/asset_pipeline.html#search-paths)).

For example, if your project uses Gulp, you would add the Sass include paths to your Gulp configuration file (for example `gulpfile.js`) with [gulp-sass](https://www.npmjs.com/package/gulp-sass). Below is an example:

```JS
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: 'node_modules'
     }))
    .pipe(gulp.dest('./styles'));
});
```

If you compile Sass to CSS in your project, your build tasks will already include something similar to the above task - in that case, you will just need
to include add `includePaths` to it.

After resolving the import paths you can import GOV.UK Frontend by using:

```SCSS
@import "@simonwhatley/govuk-publishing-frontend/govuk-pub/components/notice/notice";
```

## Importing assets

In order to import GOV.UK Publishing Frontend images and fonts to your project, you should configure your application to reference or copy the relevant GOV.UK Publishing Frontend assets.

Follow either [Recommended solution](#recommended-solution) or [Alternative solution](#alternative-solution).

### Recommended solution

Make `/node_modules/@simonwhatley/govuk-publishing-frontend/govuk-pub/assets` available to your project by routing requests for your assets folder there.

For example, if your project uses [express.js](https://expressjs.com/), below is a code sample you could add to your configuration:

```JS
app.use('/assets', express.static(path.join(__dirname, '/node_modules/@simonwhatley/govuk-publishing-frontend/govuk-pub/assets')))
```

### Alternative solution

Manually copy the images and fonts from `/node_modules/@simonwhatley/govuk-publishing-frontend/govuk-pub/assets` into a public facing directory in your project. Ideally copying the files to your project should be an automated task or part of your build pipeline to ensure that the GOV.UK Publishing Frontend assets stay up-to-date.

The default paths used for assets are `assets/images` and `assets/fonts`. **If your asset folders follow this structure, you will not need to complete the following steps.**

To use different asset paths, set `$govuk-pub-assets-path` and `$govuk-pub-images-path` in your project Sass file to point to the relevant directories in your project (this will override the defaults set in `/node_modules/@simonwhatley/govuk-publishing-frontend/govuk-pub/settings/_assets.scss`). Make sure you do this in Sass before importing `@simonwhatley/govuk-publishing-frontend` into your project - see [Importing styles](#importing-styles).

Example 1:

```SCSS
// Include images from /application/assets/images and fonts from /application/assets/fonts
$govuk-pub-assets-path: ‘/application/assets’;

@import “@simonwhatley/govuk-publishing-frontend/govuk-pub/all”;
```

Example 2:

```SCSS
// Include images from /images/@simonwhatley/govuk-publishing-frontend and fonts from /fonts
$govuk-pub-images-path: “/images/@simonwhatley/govuk-publishing-frontend/govuk-pub/”;
$govuk-pub-fonts-path: “/fonts/”;

@import “@simonwhatley/govuk-publishing-frontend/govuk-pub/all”;
```

## Include CSS and JavaScript

Add the CSS and JavaScript code to your HTML template:

```html
<!DOCTYPE html>
  <head>
    <title>Example</title>
    <link rel="stylesheet" href="assets/application.css">
  </head>
  <body>
    <!-- Copy and paste component HTML-->
    <button class="govuk-button">This is a button component</button>
    <script src="assets/application.js"></script>
  </body>
</html>
```

## Using JavaScript

Some of the JavaScript included in GOV.UK Publishing Frontend improves the usability and accessibility of the components.

You should include or import GOV.UK Publishing Frontend JavaScript, and then initialise the appropriate script in your application to ensure that all users can use it successfully.

Note that GOV.UK Publishing Frontend does not initialise any scripts by default; all scripts must be initialised in order for them to work.

### Option 1: Include JavaScript

Include the `node_modules/@simonwhatley/govuk-publishing-frontend/govuk-pub/all.js` script on your page. You might wish to copy the file into your project or reference it from node_modules.

JavaScript in GOV.UK Publishing Frontend requires HTML to be parsed first by the browser before it is initialised. Because of this, make sure you include the script before the closing `</body>` tag. Including the script elsewhere will stop components from functioning or displaying correctly.

```html
    <script src="path-to-assets/govuk-publishing-frontend/govuk-pub/all.js"></script>
  </body>
</html>
```

GOV.UK Publishing Frontend components with JavaScript behaviour are initialised manually.

### Option 2: Import JavaScript

If you're using a bundler such as Webpack, use the import syntax to import all components:

```js
import GOVUKPublishingFrontend from 'path/to/all.js';
```

If you're using a bundler such as Webpack, use the import syntax to import a component:

```js
import { feedback } from 'path/to/all.js';
```

If you're using a bundler such as Browserify, you may need to use the CommonJS require:

```js
const GOVUKPublishingFrontend = require('govuk-publishing-frontend');
new GOVUKPublishingFrontend.Feedback(...);
```

## Include CSS and JavaScript

Add the CSS and JavaScript code to your HTML template:

```html
<!DOCTYPE html>
  <head>
    <title>Example</title>
    <link rel="stylesheet" href="assets/application.css">
  </head>
  <body>
    <script src="assets/application.js"></script>
  </body>
</html>
```

