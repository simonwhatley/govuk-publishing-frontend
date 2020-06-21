'use strict'

const gulp = require('gulp');

const configPaths = require('../config/paths.json')
const taskArguments = require('./task-arguments')

// Copy assets task ----------------------
// Copies assets to taskArguments.destination
// --------------------------------------
gulp.task('copy:assets', () => {
  return gulp.src(configPaths.src + 'assets/**/*')
    .pipe(gulp.dest(taskArguments.destination + '/assets/'))
})
