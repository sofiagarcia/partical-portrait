var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) //using gulp-sass
    .pipe(gulp.dest('app/css'))
})
