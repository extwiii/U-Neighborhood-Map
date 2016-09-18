var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
  var error = false;
  gulp.
    src('./test/test.js').
    pipe(mocha()).
    on('error', function() {
      console.log('Tests failed!');
      error = true;
    }).
    on('end', function() {
      if (!error) {
        console.log('Tests succeeded! Congratzz');
        process.exit(0);
      }
    });
});

gulp.task('default', function() {
  gulp.watch(['test/**'], ['test']);
});

