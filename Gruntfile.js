'use strict';
 
module.exports = function(grunt) {
 
  // configure grunt
  grunt.initConfig({
 
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
    	files: [
    		'**/*.js',
    		'!node_modules/**/*',
    		'!test/browserify/**/*',
    	],
    	options: {
    		jshintrc: '.jshintrc'
    	}
    },

    // run the mocha tests via Node.js
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    browserify: {
      standalone: {
        src: [ '<%= pkg.name %>.js' ],
        dest: './test/browserify/<%= pkg.name %>.standalone.js',
        browserifyOptions: {
	        standalone: '<%= pkg.name %>'
        }
      },

      require: {
        src: [ '<%= pkg.name %>.js' ],
        dest: './test/browserify/<%= pkg.name %>.require.js',
        browserifyOptions: {
          alias: [ './<%= pkg.name %>.js:' ]
        }
      },
 
      tests: {
        src: [ 'test/suite.js' ],
        dest: './test/browserify/browserified_tests.js',
        browserifyOptions: {
          external: [ './<%= pkg.name %>.js' ],
          // Embed source map for tests
          debug: true
        }
      },
    },

    // Uglify browser libs
    uglify: {
      dist: {
        files: {
          'test/browserify/<%= pkg.name %>.standalone.min.js':
              ['<%= browserify.standalone.dest %>'],
        }
      }
    },

    connect: {
      server: {},
    },

    // run the mocha tests in the browser via PhantomJS
    'mocha_phantomjs': {
      all: {
        options: {
          urls: [
            'http://127.0.0.1:8000/test/index.html'
          ]
        }
      }
    },


  });
 
  // Load plug-ins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  
  // define tasks
  grunt.registerTask('default', [
    'jshint',
    'mochaTest',
    'browserify',
    //'uglify',
    'connect',
    'mocha_phantomjs'
  ]);
};