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
var rename      = require("gulp-rename");
var pump        = require('pump');
var kss         = require('kss');

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

gulp.task('styleguide',
  gulp.series(kss_clean, kss_css, css, kss_styleguide));

gulp.task('default',
  gulp.series('build', 'styleguide', server, watch));


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
  .pipe(gulp.dest('./dist/styleguide/kss-assets/css'))
  .pipe(notify({
    title: "SASS Compiled",
    message: "All SASS files have been recompiled to CSS.",
    onLast: true
  }));
}


/**
 * KSS Sass
 * Compile styles for styleguide
 */
function kss_css() {
  return gulp.src('./src/styleguide/builder/scribe/kss-assets/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: cssOutPutStyle,
      sourceMap: true
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./src/styleguide/builder/scribe/kss-assets/css'))
    .pipe(notify({
      title: "KSS Builder SASS Compiled",
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
      './src/js/vendor/jquery.waypoints.js',
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
    './src/index.html',
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


/**
 * Generate Style guide
 */
function kss_styleguide() {
  return kss({
    source: [
      'src/scss',
      'src/styleguide/components',
    ],
    destination: './dist/styleguide',
    builder: 'src/styleguide/builder/scribe',
    // namespace: 'everhood:' + __dirname + '/src/styleguide/components/',
    'verbose': true,
    // The following paths are relative to the generated style guide.
    css: [
      'kss-assets/css/styles.css'
    ],
    js: [
      // '../../src/components/teaser/teaser.js'
    ],
    homepage: 'style-guide.md',
    title: 'CSS Framework'
  }); 
}


/**
 * Clean KSS directory
 */
function kss_clean(done) {
  rimraf('dist/styleguide', done);
}

// Watch for file changes
function watch() {
  gulp.watch(['./src/styleguide/builder/scribe/kss-assets/scss/*.scss']).on('change', gulp.series( kss_css,kss_styleguide, browser.reload));
  gulp.watch(['./src/styleguide/builder/scribe/index.twig']).on('change', gulp.series( kss_styleguide, browser.reload));
  gulp.watch(['./src/styleguide/components/*/*.twig']).on('change', gulp.series( kss_styleguide, browser.reload));
  gulp.watch(['./src/scss/**/*.scss']).on('change', gulp.series( css, browser.reload));
  gulp.watch(['./src/js/**/*.js']).on('change', gulp.series( js, modernizr, browser.reload));
  gulp.watch(['./src/index.html']).on('change', gulp.series( files, browser.reload));
  gulp.watch(['./src/sys-files/*']).on('change', gulp.series( files, browser.reload));
  gulp.watch(['./src/images/**/*']).on('change', gulp.series( images, browser.reload));
}

