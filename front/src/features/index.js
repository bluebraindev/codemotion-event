import './home';
import './info';
import './search';

angular
    .module('codemotion.features', [
        'codemotion.home',
        'codemotion.info',
        'codemotion.search'
    ]);