// Karma configuration
// Generated on Thu May 25 2017 15:11:52 GMT+0530 (India Standard Time)
var args = require('yargs').argv;

var testFiles = [
  { pattern: 'node_modules/angular/angular.js', watched: false },
  { pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false},
  'src/main/js/**/*.js',
  { pattern: 'src/main/index.html', include: false, served: false},
];


if(args.testType === 'integration'){
  testFiles.push('src/test/js/Integration/**/*Int.js')
}
else {
  testFiles.push('src/test/js/unit/**/*Spec.js')
}


module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: testFiles,


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/main/js/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'dots', 'junit', 'coverage'],

    junitReporter: {
      outputDir: 'reports/junit',
      outputFile: 'test-results.xml'
    },

    coverageReporter: {
      dir: 'reports/coverage',
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        { type: 'cobertura', subdir: '.', file: 'cobertura.xml' },
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
        { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        { type: 'text', subdir: '.', file: 'text.txt' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: args.singleRun === 'false' ? false : true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
