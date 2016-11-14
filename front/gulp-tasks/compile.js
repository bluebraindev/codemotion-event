var browserify = require('browserify'),
    babelify = require('babelify'),
    gulp = require('gulp'),
    vinylBuffer = require('vinyl-buffer'),
    vinylSourceStream = require('vinyl-source-stream'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    environments = require('gulp-environments'),
    replace = require('gulp-replace'),
    fs = require('fs'),
    exorcist = require('exorcist'),
    packages = JSON.parse(fs.readFileSync('./package.json'));

module.exports = function() {

    var development = environments.development;
    var production = environments.production;

    var sources = browserify({
        entries: [
            './src/app/app',
            './www/build/html/templates.js'
        ],
        debug: true
    })
        .transform(babelify, { 
            presets: ["es2015"],
            sourceMaps: false });

    return sources.bundle()
        .pipe(development(exorcist('www/build/js/app.min.js.map')))
        .pipe(vinylSourceStream('app.min.js'))
        .pipe(vinylBuffer())
        .pipe(replace('[[[version]]]', packages.version))
        .pipe(production(ngAnnotate()))
        .pipe(production(uglify()))
        .pipe(gulp.dest('./www/build/js/'));
};

module.exports.dependencies = ['eslint', 'templates'];