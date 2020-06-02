
const gulp = require('gulp');
const lint = require('gulp-sass-lint');

// Styles lint
gulp.task('sass:lint', () => {
 return gulp.src('src/govuk-pub/**/*.scss')
   .pipe(lint({
     configFile: 'config/.sass-lint.yml'
   }))
   .pipe(lint.format())
   .pipe(lint.failOnError())
});
