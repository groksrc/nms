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
        src: ['test/**/*.spec.js']
      }
    },

    browserify: {
      standalone: {
        src: [ 'app.js' ],
        dest: './test/browserify/app.standalone.js',
        browserifyOptions: {
	        standalone: '<%= pkg.name %>'
        }
      },

      require: {
        src: [ 'app.js' ],
        dest: './test/browserify/app.require.js',
        browserifyOptions: {
          alias: [ './app.js:' ]
        }
      },
 
      tests: {
        src: [ 'test/suite.js' ],
        dest: './test/browserify/browserified_tests.js',
        browserifyOptions: {
          external: [ './app.js' ],
          // Embed source map for tests
          debug: true
        }
      },
    },

    // Uglify browser libs
    uglify: {
      dist: {
        files: {
          'test/browserify/app.standalone.min.js':
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
    'uglify',
    // Uncomment to run the tests with phantomjs
    //'connect',        
    //'mocha_phantomjs'
  ]);
};