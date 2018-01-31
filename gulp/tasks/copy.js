var gulp = require('gulp');
var copy = require('gulp-contrib-copy');
 
gulp.task('copy', function() {
  gulp.src(['src/**/*', '!./src/scss/**'])
    .pipe(copy())
    .pipe(gulp.dest('build/'));
});