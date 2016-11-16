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
                res.data.forEach(justTracksToOrdinalDay)
            })

        function justTracksToOrdinalDay(track, index) {
            index < 12 ? vm.rooms.push(track) : undefined;
        }
    }
}