import agendaService from './agenda';

export default angular
    .module('core.services', [])
    .service('$agenda', agendaService)
    .name;