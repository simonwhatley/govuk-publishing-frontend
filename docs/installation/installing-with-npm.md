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

After you have installed GOV.UK Frontend the `@simonwhatley/govuk-publishing-frontend` package will appear in your `node_modules` folder.

## Importing styles

You need to import the GOV.UK Frontend styles into the main Sass file in your project. You should place the below code before your own Sass rules (or Sass imports) if you want to override GOV.UK Frontend with your own styles.

1. To import all components, add the below to your Sass file:

```SCSS
@import "node_modules/@simonwhatley/govuk-publishing-frontend/govuk/all";
```

2. To import an individual component (for example a button), add the below to your Sass file:

```SCSS
@import "node_modules/@simonwhatley/govuk-publishing-frontend/govuk/components/button/button";
```

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
    .pipe(gulp.dest('./css'));
});
```

If you compile Sass to CSS in your project, your build tasks will already include something similar to the above task - in that case, you will just need
to include add `includePaths` to it.

After resolving the import paths you can import GOV.UK Frontend by using:

```SCSS
@import "@simonwhatley/govuk-publishing-frontend/govuk/components/button/button";
```
