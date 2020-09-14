'use strict'

const gulp = require('gulp')
const requireDir = require('require-dir')

requireDir('./gulp', {
  recurse: true
})

gulp.task('generate-assets', gulp.series(
  'clean',
  gulp.parallel(
    'copy-assets',
    'copy-component-javascript',
    'copy-vendor-javascript',
    'copy-govuk-javascript',
    'copy-common',
    'copy-all',
    'lint:scss',
    'sass'
  )
))

gulp.task('watch', gulp.parallel(
  'watch-sass',
  'watch-javascript',
  'watch-assets'
))

gulp.task('build:package', gulp.series(
  'clean',
  'build:copy-files',
  'build:javascript',
  'build:compress-images'
))

gulp.task('build:dist', gulp.series(
  'clean',
  'lint:scss',
  'compile:scss',
  'compile:js',
  'assets:copy',
  'assets:update-version'
))

gulp.task('default', gulp.series(
  'generate-assets',
  gulp.parallel(
    'watch',
    'server'
  )
))
