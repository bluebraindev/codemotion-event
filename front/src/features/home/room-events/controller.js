export default function RoomEventsController($scope, $state, $http, $roomEvents) {
    'ngInject'

    var vm = this;
    vm.rooms = [];
    vm.events = [];
    vm.getEventsByDayTrack = getEventsByDayTrack;

    init();

    function init() {
        vm.rooms = getRooms();

        vm.events = getEventsByDayTrack("Track 1", 0);                 
    }

    function getRooms() {
        return $roomEvents.getRooms().then(rooms => vm.rooms = rooms);
    }

    function getEventsByDayTrack(trackName, day) {
        return $roomEvents.getEventsByDayTrack(trackName, day).then(events => vm.events = events);
    }
}