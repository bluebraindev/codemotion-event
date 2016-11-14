import route from './route';
import Service from './service';
import Controller from './controller';

// import './event-details';
// import './room-events';

export default angular
    .module('codemotion.home', [
        'ui.router',
        // 'codemotion.home.room-events',
        // 'codemotion.home.event-details'
    ])
    .config(route)
    .controller('HomeController', Controller)
    .service('$home', Service)
    .name;
