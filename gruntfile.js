module.exports = function(grunt) {

  // Configure Tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify:{
      build: {
        files: {
          'dist/js/scripts.min.js': [ 'src/js/vendor/headroom.js',
                                      'src/js/vendor/jquery.headroom.js',
                                      'src/js/vendor/jquery.waypoints.js',
                                      'src/js/main.js'
                                    ]
        }
      },
      dev: {
        options: {
          beautify: true,
          mange: false,
          compress: false,
          preserveComments: 'all'
        },
        files: {
          'dist/js/scripts.min.js': [ 'src/js/vendor/headroom.js',
                                      'src/js/vendor/jquery.headroom.js',
                                      'src/js/vendor/jquery.waypoints.js',
                                      'src/js/main.js'
                                    ]
        }
      }
    },
    sass : {
      build: {
        options : {
          outputStyle: 'compressed'
        },
        files : {
          'dist/css/styles.css' : 'src/scss/application.scss'
        }
      },
      dev: {
        options : {
          outputStyle: 'nested'
        },
        files : {
          'dist/css/styles.css' : 'src/scss/application.scss'
        }
      }
    },
    watch : {
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['uglify:dev']
      },
      css: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass:dev']
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks( 'grunt-contrib-handlebars' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-sass' );

  // Register tasks
  grunt.registerTask( 'default', [ 'uglify:dev','sass:dev' ]);
  grunt.registerTask( 'build',   [ 'uglify:build','sass:build' ]);

};
