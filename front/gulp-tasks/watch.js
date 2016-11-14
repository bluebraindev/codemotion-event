var gulp = require('gulp');

var paths = {
    sass: [
        './src/**/*.scss', 
        './scss/**/*.scss'],
    js: ['./src/**/*.js'],
    html : './src/**/*.html'
};

module.exports = function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['compile']);
    gulp.watch(paths.html, ['compile']);
};


