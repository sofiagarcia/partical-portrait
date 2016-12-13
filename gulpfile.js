var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) //using gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('watch',['browserSync', 'sass'], function() {
  gulp.watch('app/scss/**.*.scss', ['sass']);
  //reload broswer when HTML or JS files change
  gulp.watch('app/*.html', broswerSync.reload);
  gulp.watch('app/js/**/*.js', broswerSync.reload);
});

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})
