export default function HomeController($agenda) {
    'ngInject'

    var vm = this;

    init();
    
    vm.getNameFromRoom = getNameFromRoom;

    vm.rooms = [];

    function getNameFromRoom(position) {
        return vm.rooms[position].name;
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