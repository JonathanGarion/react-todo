var gulp = require('gulp');
var babel = require('gulp-babel');
 
gulp.task('babel', () =>
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('build/js'))
);