const gulp = require('gulp');

gulp.task('copy-component-javascript', () => {
  return gulp.src([
      'src/govuk-pub/components/**/*.js'
    ])
    .pipe(gulp.dest('public/javascripts/components/'));
});
