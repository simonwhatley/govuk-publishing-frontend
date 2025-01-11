const gulp = require('gulp')

gulp.task('copy-govuk-javascript', () => {
  return gulp.src([
    'node_modules/govuk-frontend/dist/govuk/all.mjs'
  ])
    .pipe(gulp.dest('public/javascripts/govuk'))
})
