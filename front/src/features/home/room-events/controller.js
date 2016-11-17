export default function RoomEventsController($scope, $state, $roomEvents, $agenda) {
    'ngInject'

    var vm = this;

    vm.rooms = [];


    vm.goDetail = goDetail;
    vm.onSelect = onSelect;

    init();

    function init() {
        $agenda.getTalks()
            .then(() => vm.eventsFromRoom = $agenda.getTalksByTrack($agenda.getIdToRoomEvents()));
        $agenda.getTracks()
            .then((res) => {
                vm.rooms = res;
                vm.rooms.splice(12, 24);
                vm.rooms.forEach(assign);
            })

        function assign(element) {
            element.id === $agenda.getIdToRoomEvents() ? vm.confirmed = element.name : undefined;
        }
    }

    function goDetail() {
        $state.go('home.event-details');
    }

    function onSelect() {
        // on changes
    }

    vm.options = {
        loop: false,
        effect: 'fade',
        speed: 500,
    }
}