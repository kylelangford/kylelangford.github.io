var gulp        = require('gulp');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var notify      = require('gulp-notify');
var modernizr   = require('gulp-modernizr');
var uglify      = require('gulp-uglify');
var path        = require('path');
var rimraf      = require('rimraf');
var browser     = require('browser-sync').create();

// Settings
var cssOutPutStyle = 'expanded';
// var cssOutPutStyle = 'compressed';

// Tasks
gulp.task('css', 
  gulp.series(css));

gulp.task('clean', 
  gulp.series(clean));

gulp.task('build', 
  gulp.series(files, images, icons, css, js));

gulp.task('default',
  gulp.series('build', server, watch));


// Delete the "dist" folder
function clean(done) {
  rimraf('dist', done);
}

// Compile Scss into CSS
function css() {
  return gulp.src('./src/scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: cssOutPutStyle,
    sourceMap: true 
  }))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist/css'))
  .pipe(notify({
    title: "SASS Compiled",
    message: "All SASS files have been recompiled to CSS.",
    onLast: true
  }));
}

// JS
function js() {

  function createErrorHandler(name) {
    return function (err) {
      console.error('Error from ' + name + ' in compress task', err.toString());
    };
  }

  return gulp.src([
      './src/js/vendor/wow.js',
      './src/js/*.js' 
    ])
    .pipe(concat('main.js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .on('error', createErrorHandler('uglify'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(notify({
      title: "JS Minified",
      message: "All JS files in the theme have been minified.",
      onLast: true
    }));
}

// Copy Misc Files
function files() {
  return gulp.src([
    './src/*.html',
    './src/php/mailer.php',
    './src/sys-files/*',
    ])
  .pipe(gulp.dest('dist/'));
}

// Copy Images
function images() {
  return gulp.src('./src/img/**/*')
  .pipe(gulp.dest('dist/img/'));
}

// Copy Fonts
function icons() {
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts/'));
}


/**
 * Start a server with LiveReload to preview the site in
 */
function server(done) {
	browser.init({
    server: {
      baseDir: 'dist',
      port: 3000
    }
  });
  done();
}


// Watch for file changes
function watch() {
  gulp.watch(['./src/scss/**/*.scss']).on('change', gulp.series( css, browser.reload));
  gulp.watch(['./src/js/**/*.js']).on('change', gulp.series( js, modernizr, browser.reload));
  gulp.watch(['./src/index.html']).on('change', gulp.series( files, browser.reload));
  gulp.watch(['./src/sys-files/*']).on('change', gulp.series( files, browser.reload));
  gulp.watch(['./src/images/**/*']).on('change', gulp.series( images, browser.reload));
}

