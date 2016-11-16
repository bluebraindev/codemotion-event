export default function RoomController($state, $timeout) {
    'ngInject'
    var vm = this;

    vm.stable = true;

    vm.doEffectOnClick = doEffectOnClick;

    vm.goToDetails = goToDetails;

    function goToDetails() {
        vm.stable = false;
        $timeout(() => {
            $state.go('search');
        }, 150);
    }

    function doEffectOnClick() {
        return vm.stable ? 'stable' : 'actived';
    }
}