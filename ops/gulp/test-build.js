var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks-html');

gulp.task('nunjucks', function() {
  return gulp.src('./test/templates/**/*.njk')
    .pipe(nunjucks({
      searchPaths: ['./test/templates']
    }))
    .on('error', function(err) {
      // err is the error thrown by the Nunjucks compiler.
      console.log(err);
    })
    .pipe(gulp.dest('./docs/test'));
});
