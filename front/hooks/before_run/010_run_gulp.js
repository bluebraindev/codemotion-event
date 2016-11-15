#!/usr/bin/env node

var gutil = require('gulp-util');

var exec = require('child_process').exec,
    child;
    
child = exec('gulp --color', function (error, stdout, stderr) {
    gutil.log(stdout);
    gutil.log(stderr);
    if(error){
        gutil.log(error);
    }
});
