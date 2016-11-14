var gulp = require('gulp'),
    concat = require('gulp-concat');

module.exports = function () {
    var _src = [
        './lib/ionic/js/ionic.bundle.min.js',
        './lib/moment/min/moment.min.js',
    ];

    return gulp.src(_src)
        .pipe(concat("vendors.min.js"))
        .pipe(gulp.dest('www/build/js'));
};