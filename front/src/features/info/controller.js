export default function InfoController() {
    'ngInject'

    var vm = this;

    init();

    function init() {
        vm.header = "Info";
    }
}