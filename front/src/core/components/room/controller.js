export default function RoomController($state, $timeout, $agenda) {
    'ngInject'
    var vm = this;

    vm.stable = true;

    vm.doEffectOnClick = doEffectOnClick;

    vm.goToDetails = goToDetails;

    function goToDetails() {
        vm.stable = false;
        $timeout(() => {
            $agenda.setIdFromTrack(vm.room.id);
            $state.go('home.room-events');
        }, 150);
    }

    function doEffectOnClick() {
        return vm.stable ? 'stable' : 'actived';
    }
}