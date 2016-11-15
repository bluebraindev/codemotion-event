import home from './home'
import info from './info'
import search from './search'

export default angular
    .module('codemotion.features', [
        home,
        info,
        search
    ])
    .name;