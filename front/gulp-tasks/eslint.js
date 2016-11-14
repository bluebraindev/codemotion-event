var gulp = require('gulp');
var eslint = require('gulp-eslint');
var reporter = require('eslint-html-reporter');
var path = require('path');
var fs = require('fs');
var appRoot = require('app-root-path');

module.exports = function () {
    return gulp.src(['./src/**/*.js', './gulp-tasks/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.format(reporter, writeReportInDisk))
        .pipe(eslint.failAfterError());


    function writeReportInDisk(results) {
        var dir = appRoot + '/reports/eslint';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        fs.writeFileSync(path.join(dir, 'eslint.html'), results);
    };
};