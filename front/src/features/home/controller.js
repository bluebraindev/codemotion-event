export default function HomeController($state) {
    'ngInject'
    var vm = this;
    vm.rooms = [
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
        },
        {
            name: 'E'
        }
    ];

    $state.go('home.room-events');    
}