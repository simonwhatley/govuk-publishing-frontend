'use strict'

const fs = require('fs')

const gulp = require('gulp')
const gulpif = require('gulp-if')
const rename = require('gulp-rename')
const del = require('del')
const vinylPaths = require('vinyl-paths')

const configPaths = require('../config/paths.json')
const taskArguments = require('./task-arguments')

// check for the flag passed by the task

const isDist = taskArguments.destination === 'dist' || false

// Update assets' versions ----------
// Add all.package.json version
// ----------------------------------
gulp.task('version:update-assets', () => {
  const pkg = require('../' + configPaths.package + 'package.json')
  fs.writeFileSync(taskArguments.destination + '/VERSION.md', pkg.version + '\r\n')
  return gulp.src([
    taskArguments.destination + '/govuk-publishing-frontend.min.css',
    taskArguments.destination + '/govuk-publishing-frontend-ie8.min.css',
    taskArguments.destination + '/govuk-publishing-frontend.min.js'
  ])
    .pipe(vinylPaths(del))
    .pipe(gulpif(isDist,
      rename(obj => {
        obj.basename = obj.basename.replace(/(govuk.*)(?=\.min)/g, '$1-' + pkg.version)
        return obj
      })
    ))
    .pipe(gulp.dest(taskArguments.destination + '/'))
})
