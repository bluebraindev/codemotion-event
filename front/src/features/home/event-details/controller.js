export default function EventDetailsController($scope, $state, $eventDetails, $agenda) {
    'ngInject'

    var vm = this;
    vm.authors = [];
    vm.tagsEvent = {};    

    init();

    function init() {
        vm.header = 'Event Details';

        $agenda.getTalks().then(() => {
            var talk = $agenda.getTalkById($agenda.getEventId());
            vm.eventDetail = talk[0];
            vm.authors = talk[0].contents.authors;
            vm.tagsEvent = talk[0].contents.tags;
        });
    }
}