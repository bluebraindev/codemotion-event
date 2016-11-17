export default function HomeController($agenda) {
    'ngInject'

    var vm = this;

    init();

    vm.getRoom = getRoom;
    vm.rooms = [];

    function getRoom(position) {
        return vm.rooms[position];
    }

    function init() {
        vm.header = 'Codemotion';
        $agenda.getTracks()
            .then((res) => {
                vm.rooms = res;
                vm.rooms.splice(12, 24);
            })
    }
}