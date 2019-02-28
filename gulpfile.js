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
gulp.task('build', 
  gulp.series( files, images, icons, css, js ));

gulp.task('clean', 
  gulp.series(clean));

gulp.task('css', 
  gulp.series(css));

gulp.task('default',
  gulp.series('build', server, watch));

// gulp.task('styleguide',
//   gulp.series( kss-styleguide));

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
  .pipe(gulp.dest('./src/styleguide/builder/handlebars/kss-assets/'))
  .pipe(notify({
    title: "SASS Compiled",
    message: "All SASS files have been recompiled to CSS.",
    onLast: true
  }));
}


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
    './src/sys-files/.htaccess',
    './src/sys-files/robots.txt',
    './src/sys-files/humans.txt',
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

// Start a server with LiveReload to preview the site in
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
gulp.task('kss-styleguide', function() {
  return kss({
    source: [
      'src/scss',
      'src/styleguide/components',
    ],
    destination: './dist/styleguide',
    builder: 'src/styleguide/builder/handlebars',
    namespace: 'brunello:' + __dirname + '/src/components/',
    'verbose': true,
    // The css and js paths are URLs, like '/misc/jquery.js'.
    // The following paths are relative to the generated style guide.
    css: [
      path.relative(
        __dirname + '/styleguide/',
        __dirname + '/kss-assets/everhood.css'
      )
    ],
    // js: [
    //   '../../src/components/teaser/teaser.js'
    // ],
    homepage: 'style-guide.md',
    title: 'Hood Design System'
  });
});

/**
 * KSS Sass
 */
// gulp.task('kss-sass', function () {
//   return gulp.src('./src/style-guide/builder/kss-assets/kss.scss')
//     .pipe(sourcemaps.init())
//     .pipe(sass({
//       noCache: true,
//       outputStyle: "compressed",
//       lineNumbers: false,
//       loadPath: './src/style-guide/builder/kss-assets/',
//       sourceMap: true
//     })).on('error', function(error) {
//       gutil.log(error);
//       this.emit('end');
//     })
//     .pipe(sourcemaps.write('./maps'))
//     .pipe(gulp.dest('./src/style-guide/builder/kss-assets/'))
//     .pipe(notify({
//       title: "KSS Builder SASS Compiled",
//       message: "All SASS files have been recompiled to CSS.",
//       onLast: true
//     }));
// });

/**
 * Watch KSS Builder theme
 */
// gulp.task('kss-watch', function() {
//   gulp.watch([
//       './src/style-guide/builder/kss-assets/kss.scss', 
//       './src/style-guide/builder/index.twig', 
//       './src/style-guide/components/**/*.twig', 
//       './src/scss/style-guide.md', 
//       './src/scss/**/*.scss', 
//     ], [
//       'kss-sass', 
//       'sass', 
//       'kss-styleguide', 
//       'reload'
//     ]);
// });

// Watch for file changes
function watch() {
  gulp.watch(['./src/scss/**/*.scss']).on('change', gulp.series( css, browser.reload));
  gulp.watch(['./src/js/**/*.js']).on('change', gulp.series( js, modernizr, browser.reload));
  gulp.watch(['./src/*.html', './src/*.txt', './src/.htaccess']).on('change', gulp.series( files, browser.reload));
  gulp.watch(['./src/images/**/*']).on('change', gulp.series( images, browser.reload));
}

