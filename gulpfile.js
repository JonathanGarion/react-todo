'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
  runSequence(
      'clean',
      ['copy','sass','babel','watch']
  );
});

var requireDir = require('require-dir');
requireDir('gulp/tasks');
