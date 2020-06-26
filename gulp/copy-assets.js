const gulp = require('gulp');

gulp.task('copy-assets', () => {
  return gulp.src([
      '!app/assets/sass{,/**/*}',
      'app/assets/**',
      'src/govuk-pub/assets/**'
    ])
    .pipe(gulp.dest('public/'));
});
