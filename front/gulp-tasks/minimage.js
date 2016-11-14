var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    environments = require('gulp-environments');

module.exports = function() {
    
    var production = environments.production;

    return gulp.src('img/**/*.png')
        .pipe(production(imagemin({
            use : [pngquant()]
        })))
        .pipe(gulp.dest('www/build/img'))
};
