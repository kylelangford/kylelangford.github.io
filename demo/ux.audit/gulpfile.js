var gulp        = require('gulp');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var rimraf      = require('rimraf');
var browser     = require('browser-sync').create();
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var rename      = require("gulp-rename");
var pump        = require('pump');

//
// Settings
//

var uglifyOptions = {
  beautify: true,
  comments: true,
  sourceMap: false,
  mangle: false
};

var cssOutPutStyle = 'compressed';

//
// Tasks
//

gulp.task('build', 
  gulp.series( clean, index, partials, css, js, php, fonts, json, images, htaccess ));

gulp.task( 'default',
  gulp.series( 'build', server, watch ));

//
// Functions
//

// Delete the "dist" folder
function clean(done) {
  rimraf('dist', done);
}

// Compile Sass into CSS
function css() {
  return gulp.src('./src/assets/scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: cssOutPutStyle }).on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('dist/css'));
}

// Concat and Uglify JS
function js() {
  return gulp.src(
  	[
      // Load Plugins
      'src/assets/scripts/*.js',
  	])
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify(uglifyOptions))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('dist/scripts'));
}

// Compile Sass into CSS
function php() {
  return gulp.src('./src/assets/scripts/*.php')
  .pipe(gulp.dest('dist/scripts'));
}

// Compile Sass into CSS
function fonts() {
  return gulp.src('./src/assets/fonts/*')
  .pipe(gulp.dest('dist/fonts'));
}

// Compile Sass into CSS
function images() {
  return gulp.src('./src/assets/images/*')
  .pipe(gulp.dest('dist/images'));
}

// Compile Sass into CSS
function json() {
  return gulp.src('./src/assets/data/*')
  .pipe(gulp.dest('dist/data'));
}

// Compile Sass into CSS
function htaccess() {
  return gulp.src('./src/.htaccess')
  .pipe(gulp.dest('dist/'));
}

// Compile Sass into CSS
function index() {
  return gulp.src('./src/index.html')
  .pipe(gulp.dest('dist/'));
}

// Compile Sass into CSS
function partials() {
  return gulp.src('./src/partials/*')
  .pipe(gulp.dest('dist/partials'));
}


// Start a server with LiveReload to preview the site in
function server(done) {
	browser.init({
    server: {
      baseDir: 'dist'
    }
  });
  done();
}

// Watch for file changes
function watch() {
  gulp.watch(['../scss/**/*.scss', 'src/assets/scss/**/*.scss']).on('change', gulp.series( css, browser.reload));
  gulp.watch(['src/assets/scripts/*.js']).on('change', gulp.series( js, browser.reload));
  gulp.watch(['src/index.html', 'src/partials/*', ]).on('change', gulp.series( index, partials, browser.reload));
}

