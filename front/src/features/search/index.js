import route from './route'
import controller from './controller'

export default angular
	.module('codemotion.search', [
		'ui.router'
	])
	.config(route)
	.controller('SearchController', controller)
	.name;