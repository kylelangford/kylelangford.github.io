const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const modernizr = require('gulp-modernizr');
const uglify = require('gulp-uglify');
const path = require('path');
const rimraf = require('rimraf');
const gulpPostcss = require('gulp-postcss');
const cssDeclarationSorter = require('css-declaration-sorter');
const autoprefixer = require('gulp-autoprefixer');
const eslint = require('gulp-eslint');
const panini = require('panini');
const browser = require('browser-sync').create(); /* Create Server */

// Settings
const cssOutPutStyle = 'expanded'; /* 'compressed' */

// Tasks
gulp.task('css', gulp.series(css, prefixCSS, sortCSS));
gulp.task('build', gulp.series('css', js, paniniPress));
gulp.task('default', gulp.series('build', server, watch));

// Compile Scss into CSS
function css() {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: cssOutPutStyle,
        sourceMap: true,
      })
    )
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/assets/css'))
    .pipe(
      notify({
        title: 'SASS Compiled',
        message: 'All SASS files have been recompiled to CSS.',
        onLast: true,
      })
    );
}

function prefixCSS() {
  return gulp
    .src('./build/assets/css/styles.css')
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest('./build/assets/css'));
}

function sortCSS() {
  return gulp
    .src('./build/assets/css/styles.css')
    .pipe(gulpPostcss([cssDeclarationSorter({ order: 'smacss' })]))
    .pipe(gulp.dest('./build/assets/css'));
}

// JS
function js() {
  function createErrorHandler(name) {
    return function(err) {
      console.error('Error from ' + name + ' in compress task', err.toString());
    };
  }

  return (
    gulp
      .src([
        './src/js/vendor/slick.js',
        './src/js/vendor/wow.js',
        './src/js/*.js',
      ])
      .pipe(concat('main.js'))
      // .pipe(eslint())
      // .pipe(eslint.format())
      // .pipe(eslint.failAfterError())
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .on('error', createErrorHandler('uglify'))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./build/assets/js'))
      .pipe(
        notify({
          title: 'JS Minified',
          message: 'All JS files in the theme have been minified.',
          onLast: true,
        })
      )
  );
}

function paniniPress() {
  return gulp
    .src('src/templates/pages/**/*.html')
    .pipe(
      panini({
        root: 'src/templates/pages/',
        // pageLayouts: {
        //   // All pages inside src/pages/blog
        //   // will use the blog.html layout
        //   article: 'article',
        //   work: 'work',
        // },
        layouts: 'src/templates/layouts/',
        partials: 'src/templates/partials/',
        helpers: 'src/templates/helpers/',
        data: 'src/templates/data/',
      })
    )
    .pipe(gulp.dest('build'));
}

/**
 * Start a server with LiveReload to preview the site in
 */
function server(done) {
  browser.init({
    server: {
      baseDir: './build',
      port: 3000,
    },
  });
  done();
}

// Watch for file changes
function watch() {
  gulp
    .watch(['./src/scss/**/*.scss'])
    .on('change', gulp.series(css, browser.reload));
  gulp
    .watch(['./src/js/**/*.js'])
    .on('change', gulp.series(js, modernizr, browser.reload));
  gulp.watch(['./pages/*.html']).on('change', gulp.series(browser.reload));
  gulp.watch(['./*.html']).on('change', gulp.series(browser.reload));
  gulp.watch(['./src/**/**/*.html'], gulp.series(panini.refresh));
}
