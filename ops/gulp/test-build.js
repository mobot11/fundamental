const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks-html');

let environment = require('../lib/environment');

const task = (cb) => {

    return gulp.src('./test/templates/*.njk')
      .pipe(nunjucks({
        searchPaths: ['./test/templates']
      }))
      .on('error', function(err) {
        // err is the error thrown by the Nunjucks compiler.
      })
      .pipe(gulp.dest('./docs/test'));

}

gulp.task('test-build', task);
module.exports = task;
