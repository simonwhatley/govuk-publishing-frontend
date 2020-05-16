const gulp = require('gulp');

gulp.task('watch-sass', (done) => {
  gulp.watch([
    'src/govuk-pub/assets/images/**',
    'src/govuk-pub/settings/**/*.scss',
    'src/govuk-pub/objects/**/*.scss',
    'src/govuk-pub/helpers/**/*.scss',
    'src/govuk-pub/utilities/**/*.scss',
    'src/govuk-pub/components/**/*.scss',
    'src/govuk-pub/components/**/*.js',
    'src/govuk-pub/namespace.js',
    'src/govuk-pub/helpers.js',
    'app/assets/sass/*.scss'
  ], gulp.series('sass'));
  done();
});

gulp.task('watch-javascript', (done) => {
  gulp.watch([
    'src/govuk-pub/components/**/*.js',
    'src/govuk-pub/namespace.js',
    'src/govuk-pub/helpers.js'
  ], gulp.series('copy-component-javascript', 'copy-namespace', 'copy-helpers'));
  done();
});

gulp.task('watch-assets', (done) => {
  gulp.watch([
    'app/assets/images/**',
    'app/components/**',
    'app/assets/javascripts/**'], {cwd: './'}, gulp.task('copy-assets'));
  done();
});
