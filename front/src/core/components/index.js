import events from './events'
import room from './room'
export default angular
    .module('core.components', [
        events,
        room
    ])
    .name;