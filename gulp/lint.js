'use strict'

const gulp = require('gulp');
const lint = require('gulp-sass-lint');

const configPaths = require('../config/paths.json')
const taskArguments = require('./task-arguments')

// Scss lint check -----------------------
// ---------------------------------------
gulp.task('lint:scss', () => {
  const destination = taskArguments.destination

  if (destination === 'package') {
    return gulp.src([
      configPaths.src + '**/*.scss'
    ])
      .pipe(lint({
        configFile: 'config/.sass-lint.yml'
      }))
      .pipe(lint.format())
      .pipe(lint.failOnError())
  } else {
    return gulp.src([
      configPaths.app + '**/*.scss',
      configPaths.src + '**/*.scss'
    ])
      .pipe(lint({
        configFile: 'config/.sass-lint.yml'
      }))
      .pipe(lint.format())
      .pipe(lint.failOnError())
  }
})
