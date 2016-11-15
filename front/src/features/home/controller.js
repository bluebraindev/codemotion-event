export default function HomeController($scope, $state, $http, $home) {
    'ngInject'
    var vm = this;
    $state.go('home.room-events');
}