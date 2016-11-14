export default function ($stateProvider) {
    'ngInject'

    $stateProvider
        .state('home.event-details', {
            parent: 'codemotion',
            url: '/room-events/event-details',
            cache: 'false',
            views: {
                'bodyView': {
                    templateUrl: 'src/features/home/event-details/template.html',
                    controller: 'EventDetailsController',
                    controllerAs: 'vm'
                }
            }
        });
}