export default function EventDetailsController($scope, $state, $eventDetails, $agenda) {
    'ngInject'

    var vm = this;
    var talks = [];

    init();

    function init() {
        vm.header = 'Event Details';

        $agenda.getTalks().then(() => {
            var talk = $agenda.getTalkById(83004001);
            vm.eventDetail = talk[0];
        })
    }
}