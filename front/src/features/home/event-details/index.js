import route from './route';
import Controller from './controller';
import Service from './service';

angular
    .module('codemotion.home.event-details', [
        'ui.router',
    ])
    .config(route)
    .controller('EventDetailsController', Controller)
    .service('$eventDetails', Service);