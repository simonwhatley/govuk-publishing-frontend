const gulp = require('gulp');

gulp.task('copy-all', () => {
  return gulp.src([
      'src/govuk-pub/all.js'
    ])
    .pipe(gulp.dest('public/javascripts/'));
});
