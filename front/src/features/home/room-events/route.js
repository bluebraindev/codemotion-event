export default function ($stateProvider) {
    'ngInject'

    $stateProvider
        .state('home.room-events', {
            parent: 'codemotion',
            url: '/room-events',
            cache: 'false',
            views: {
                'bodyView': {
                    templateUrl: 'src/features/home/room-events/template.html',
                    controller: 'RoomEventsController',
                    controllerAs: 'vm'
                }
            }
        });
}