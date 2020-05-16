const gulp = require('gulp');
var concat = require('gulp-concat');
var umd = require('gulp-umd');

gulp.task('build:javascript', () => {
  return gulp.src([
      'src/govuk-pub/namespace.js',
      'src/govuk-pub/helpers.js',
      'src/govuk-pub/components/**/*.js'
    ])
    .pipe(concat('all.js'))
    .pipe(umd({
      exports: function() {
        return 'GOVUKPublishingFrontend';
      },
      namespace: function() {
        return 'govukPublishingFrontend';
      }
    }))
    .pipe(gulp.dest('package/govuk-pub/'));
});
