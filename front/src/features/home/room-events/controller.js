export default function RoomEventsController($scope, $state, $roomEvents) {
    'ngInject'

    var vm = this;
    vm.rooms = [];
    vm.events = [];
    vm.getRoomFromSelect = getRoomFromSelect;
    vm.getEventsByDayTrack = getEventsByDayTrack;
    vm.goDetail = goDetail;

    init();

    function init() {
        vm.rooms = getRooms();
        // FALTA COGER EL VALUE DE LA SALA EN EL SELECT ----- NG-CHANGE
        vm.events = getEventsByDayTrack("Track 1", 0);                     
    }

    function getRooms() {
        return $roomEvents.getRooms().then(rooms => vm.rooms = rooms);
    }

    function getRoomFromSelect() {

    }

    function getEventsByDayTrack(trackName, day) {
        return $roomEvents.getEventsByDayTrack(trackName, day).then(events => vm.events = events);
    }

    function goDetail(event) {
        console.log(event);
        $state.go('home.event-details');
    }
}