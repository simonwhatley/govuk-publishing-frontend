const gulp = require('gulp');

gulp.task('copy-namespace', () => {
  return gulp.src([
      'src/govuk-pub/namespace.js'
    ])
    .pipe(gulp.dest('public/javascripts/'));
});
