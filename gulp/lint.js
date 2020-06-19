'use strict'

const gulp = require('gulp');
const lint = require('gulp-sass-lint');

const configPaths = require('../config/paths.json')

// Scss lint check -----------------------
// ---------------------------------------
gulp.task('scss:lint', () => {
  return gulp.src([
    configPaths.app + '**/*.scss',
    configPaths.src + '**/*.scss'
  ])
    .pipe(lint({
      configFile: 'config/.sass-lint.yml'
    }))
    .pipe(lint.format())
    .pipe(lint.failOnError())
})
