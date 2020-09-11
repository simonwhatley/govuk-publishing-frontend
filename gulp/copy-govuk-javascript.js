const gulp = require('gulp')

gulp.task('copy-govuk-javascript', () => {
  return gulp.src([
    'node_modules/govuk-frontend/govuk/all.js'
  ])
    .pipe(gulp.dest('public/javascripts/govuk'))
})
