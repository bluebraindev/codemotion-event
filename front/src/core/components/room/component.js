import RoomController from './controller'

const component = {
    bindings: {
        room: '='
    },
    templateUrl: 'src/core/components/room/template.html',
    controller: RoomController,
    controllerAs: 'vm'
};

export default component;