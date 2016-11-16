export default function HomeController() {
    'ngInject'
    
    var vm = this;

    init();

    vm.isDefinedRoom = isDefinedRoom;

    vm.getNameFromRoom = getNameFromRoom;

    function getNameFromRoom(position){
        return vm.rooms[position].name;
    }

    function isDefinedRoom(position) { 
        return vm.rooms[position];
    }

    function init() {
        vm.header = 'Tracks';
        vm.rooms = [
            {
                name: '1'
            },
            {
                name: '2'
            },
            {
                name: '3'
            },
            {
                name: '4'
            },
            {
                name: '5'
            },
            {
                name: '6'
            },
            {
                name: '7'
            },
            {
                name: '8'
            },
            {
                name: '9'
            },
            {
                name: 'A'
            },
            {
                name: 'B'
            },
            {
                name: 'C'
            },
            {
                name: 'D'
            }
        ];
    }
}