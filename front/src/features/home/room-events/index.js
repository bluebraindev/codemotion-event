import route from './route';
import Controller from './controller';
import Service from './service';

angular
    .module('codemotion.home.room-events', [
        'ui.router',
    ])
    .config(route)
    .controller('RoomEventsController', Controller)
    .service('$roomEvents', Service);