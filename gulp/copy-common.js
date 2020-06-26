const gulp = require('gulp');

gulp.task('copy-common', () => {
  return gulp.src([
      'src/govuk-pub/common.js'
    ])
    .pipe(gulp.dest('public/javascripts/'));
});
