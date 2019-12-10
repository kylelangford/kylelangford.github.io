const gulp = require('gulp');
const babel = require('gulp-babel');
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
const gulpStylelint = require('gulp-stylelint');
const webp = require('gulp-webp');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/pass-arguments-from-cli.md
// https://stackoverflow.com/questions/23023650/is-it-possible-to-pass-a-flag-to-gulp-to-have-it-run-tasks-in-different-ways
const argv = require('yargs').argv;
const gulpif = require('gulp-if');

// Settings
// Create Settings File

const cssOutPutStyle = 'expanded'; /* 'compressed' */
// const cssOutPutStyle = 'compressed'; /* 'compressed' */
var runTimestamp = Math.round(Date.now() / 1000);

// https://www.npmjs.com/package/gulp-iconfont-css
const fontName = 'icons';

// Tasks
gulp.task('css', gulp.series(scss, prefixer, sorter));
gulp.task('js', gulp.series(js, customModernizr));
gulp.task('build', gulp.series('css', 'js', paniniPress));
gulp.task('default', gulp.series('build', server, watch));

// gulp.task('assets', gulp.series(icons, images));
gulp.task('icons', gulp.series(fonticon, copyFonts));
gulp.task('images', gulp.series(images));

/**
 * CSS
 *
 * @scss()      - Compile Scss into CSS
 * @prefixer()  - Vendor Prefixing - Is this working?
 * @sortCSS()   - Organize CSS
 *
 */

function scss() {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: cssOutPutStyle,
        sourceMap: true,
      })
    )
    .pipe(gulp.dest('./build/assets/css'))
    .pipe(
      notify({
        title: 'SASS Compiled',
        message: 'All SASS files have been recompiled to CSS.',
        onLast: true,
      })
    );
}

function prefixer() {
  return gulp
    .src('./build/assets/css/styles.css')
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest('./build/assets/css'));
}

function sorter() {
  return gulp
    .src('./build/assets/css/styles.css')
    .pipe(gulpPostcss([cssDeclarationSorter({ order: 'smacss' })]))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/assets/css'));
}

function stylelint() {
  return gulp.src('./build/assets/css/styles.css').pipe(
    gulpStylelint({
      reporters: [
        {
          // stylelint results formatter (required):
          // - pass a function for imported, custom or exposed formatters
          // - pass a string ("string", "verbose", "json") for formatters bundled with stylelint
          formatter: 'string',
          // save the formatted result to a file (optional):
          save: 'css-report.log',
          // log the formatted result to console (optional):
          console: true,
        },
      ],
    })
  );
}

/**
 * JS
 *
 * Modernizr()
 * eslint()
 *
 */

function js() {
  function createErrorHandler(name) {
    return function(err) {
      console.error('Error from ' + name + ' in compress task', err.toString());
    };
  }

  return (
    gulp
      .src([
        './src/js/vendor/lazyload.js',
        './node_modules/@dogstudio/highway/build/highway.js',
        './src/js/vendor/slick.js',
        './src/js/vendor/prism.js',
        './src/js/vendor/wow.js',
        './src/js/*.js',
      ])
      .pipe(concat('main.js'))
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      // .pipe(
      //   babel({
      //     presets: ['@babel/env'],
      //   })
      // )
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

function customModernizr() {
  return gulp
    .src('./build/assets/js/main.js')
    .pipe(modernizr('modernizr-custom.js'))
    .pipe(gulp.dest('build/assets/js/'));
}

// function eslint() {}

/**
 * Templates
 * Fire up the panini press
 */
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

// rebuild pages after updating html
function resetPages(done) {
  paniniPress();
  panini.refresh();
  done();
}

// https://www.npmjs.com/package/gulp-iconfont-css
function fonticon() {
  return gulp
    .src(['src/icons/svg/*.svg'])
    .pipe(
      iconfontCss({
        fontName: fontName,
        path: 'scss',
        targetPath: '../scss/_icons.scss',
        fontPath: '../fonts/' + fontName + '/',
      })
    )
    .pipe(
      iconfont({
        fontName: fontName,
        prependUnicode: true, // recommended option
        formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available
        timestamp: runTimestamp, // recommended to get consistent builds when watching files
        normalize: true,
        fontHeight: 1001,
      })
    )
    .pipe(gulp.dest('src/icons/fonts'));
}

function copyFonts() {
  return gulp
    .src(['src/icons/fonts/*'])
    .pipe(gulp.dest('build/assets/fonts/' + fontName));
}

// https://www.npmjs.com/package/gulp-webp
function images() {
  return gulp
    .src('src/images/**/*.{jpg,png}')
    .pipe(
      webp({
        quality: 60,
      })
    )
    .pipe(gulp.dest('build/assets/webp'));
}

// function fallBackImages() {
//   return gulp
//     .src('src/images/**/*.{jpg,png}')
//     .pipe(
//       webp({
//         quality: 60,
//       })
//     )
//     .pipe(gulp.dest('build/assets/webp'));
// }

/**
 * Server
 */
function server(done) {
  browser.init({
    server: {
      baseDir: './build',
      port: 3000,
      serveStaticOptions: {
        extensions: ['html'], // pretty urls
      },
    },
  });
  done();
}

/**
 * Watch for changes
 */
function watch() {
  gulp
    .watch(['./src/scss/**/*.scss'])
    .on('change', gulp.series('css', browser.reload));

  gulp
    .watch(['./src/js/**/*.js', './src/js/*.js'])
    .on('change', gulp.series(js, browser.reload));

  gulp
    .watch(['./src/icons/*.svg'])
    .on('change', gulp.series('icons', browser.reload));

  gulp
    .watch(['./src/templates/**/*.html', './src/templates/**/**/*.html'])
    .on('change', gulp.series(resetPages, browser.reload));
}
