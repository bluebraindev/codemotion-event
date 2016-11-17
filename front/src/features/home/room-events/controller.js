export default function RoomEventsController($scope, $state, $roomEvents, $agenda) {
    'ngInject'

    var vm = this;
    vm.rooms = [];
    vm.events = [];
    vm.getTalksByTrack = getTalksByTrack;
    vm.goDetail = goDetail;

    init();

    function init() {
        getRoomNames();
        getTalksByTrack();
    }

    function getRoomNames() {
        $agenda.getTracks().then((tracks) => {
            tracks.filter(function (element) {
                if (element.dayId === 5732408326356992) {
                    vm.rooms.push(element);
                }
            });
        });
    }

    function goDetail(event) {
        console.log(event);
        $state.go('home.event-details');
    }
}