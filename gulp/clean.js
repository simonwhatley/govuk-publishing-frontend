'use strict'

const del = require('del')
const gulp = require('gulp')

const taskArguments = require('./task-arguments')

// Clean task for a specified folder --------------------
// Removes all old files, except for package.json
// and README in all package
// ------------------------------------------------------

gulp.task('clean', () => {
  const destination = taskArguments.destination

  if (destination === 'package') {
    return del([
      `${destination}/**`,
      `!${destination}`,
      `!${destination}/package.json`,
      `!${destination}/govuk-prototype-kit.config.json`,
      `!${destination}/README.md`
    ])
  } else {
    return del([
      `${destination}/**/*`,
      '.port.tmp'
    ])
  }
})
