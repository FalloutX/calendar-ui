const gulp = require('gulp');
const pump = require('pump');
const stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();
const nib = require('nib');

gulp.task('css', function(cb) {
  pump([
    gulp.src('src/styles/*.styl'),
    stylus({
      compress: true,
      use: nib()
    }),
    gulp.dest('dist/styles/')
  ], cb);
});

gulp.task('js', function(cb) {
  pump([
    gulp.src(['src/app/*.js', 'node_modules/vue/dist/vue.js']),
    gulp.dest('dist/app/')
  ], cb);
})

gulp.task('watch', function(done) {

  gulp.watch('src/**/*.*', ['css', 'js']);
});
gulp.task('default', ['watch']);
