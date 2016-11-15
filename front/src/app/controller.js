export default function FooterController($state){
    let vm = this;

    let styles = {
        normal: 'option',
        active: 'option actived'
    };

    vm.footer = {
        home: styles.active,
        search: styles.normal,
        info: styles.normal,
        actived: 'home'
    };

    vm.navigation = navigation;

    function navigation(state){
        vm.footer[vm.footer.actived] = styles.normal;
        vm.footer[state] = styles.active;
        vm.footer.actived = state;

        $state.go(state);
    };
}