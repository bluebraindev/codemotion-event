import controller from './controller'

const component = {
    bindings: {
        data: '<'
    },
    controller,
    controllerAs: 'vm',
    templateUrl: 'src/core/components/events/template.html'
};

export default component;