var gulp    = require('gulp')
  , less    = require('gulp-less')
  , watch   = require('gulp-watch')
  , plumber = require('gulp-plumber');

var styles = [
  './less/app.less'
]

gulp.task('default', function() {
  return gulp
          .src(styles, { read: false })
          .pipe(watch())
          .pipe(plumber()) // This will keeps pipes working after error event
          .pipe(less())
          .pipe(gulp.dest('./assets/css'));
});
