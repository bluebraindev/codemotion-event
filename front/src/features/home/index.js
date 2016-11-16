import route from './route';
import Controller from './controller';

import './room-events';
import './event-details';

export default angular
    .module('codemotion.home', [
        'ui.router',
        'codemotion.home.room-events',
        'codemotion.home.event-details'
    ])
    .config(route)
    .controller('HomeController', Controller)
    .name;
