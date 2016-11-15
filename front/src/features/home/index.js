import route from './route';
import service from './service';
import Controller from './controller';
import RoomComponent from './components/room';

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
    .service('$home', service)
    .component('roomComponent', RoomComponent)
    .name;
