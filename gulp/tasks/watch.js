var gulp = require('gulp');

gulp.task('watch', ['sass'], function (){
	gulp.watch('src/scss/**/*.scss', ['sass'])
	gulp.watch('src/sections/**/*.php', ['copy'])
	gulp.watch('src/js/*.js', ['babel']);
})
