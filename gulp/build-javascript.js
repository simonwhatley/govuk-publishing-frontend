'use strict'

const gulp = require('gulp')
const concat = require('gulp-concat')
const umd = require('gulp-umd')

gulp.task('build:javascript', () => {
  return gulp.src([
    'src/govuk-pub/common.js',
    'src/govuk-pub/components/**/*.js'
  ])
    .pipe(concat('all.js'))
    .pipe(umd({
      exports: function () {
        return 'GOVUKPublishingFrontend'
      },
      namespace: function () {
        return 'GOVUKPublishingFrontend'
      }
    }))
    .pipe(gulp.dest('package/govuk-pub/'))
})
