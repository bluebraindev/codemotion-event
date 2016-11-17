import route from './route';
import controller from './controller';
import core from '../core';
import features from '../features';

angular
    .module('codemotion', [
        'ionic',
        'ui.router',
        core,
        features
    ])
    .config(route)
    .controller('AppController', controller)
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });
