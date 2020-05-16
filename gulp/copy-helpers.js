const gulp = require('gulp');

gulp.task('copy-helpers', () => {
  return gulp.src([
      'src/govuk-pub/helpers.js'
    ])
    .pipe(gulp.dest('public/javascripts/'));
});
