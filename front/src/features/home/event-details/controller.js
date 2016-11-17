export default function EventDetailsController($scope, $state, $eventDetails, $agenda) {
    'ngInject'

    var vm = this;
    var talks = [];
    vm.authors = [];
    vm.tagsEvent = {};    

    init();

    function init() {
        vm.header = 'Event Details';

        $agenda.getTalks().then(() => {
            var talk = $agenda.getTalkById(85544001);
            vm.eventDetail = talk[0];
            vm.authors = talk[0].contents.authors;
            vm.tagsEvent = talk[0].contents.tags;
                    
        });
    }
}