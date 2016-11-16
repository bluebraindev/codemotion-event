var gulp = require('gulp');

module.exports = function() {
    
    return gulp.src(['json/*', '!json/*.py', '!json/agenda-code.json'])
        .pipe(gulp.dest('www/json'));
};
