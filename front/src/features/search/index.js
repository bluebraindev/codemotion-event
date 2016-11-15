import route from './route'
import controller from './controller'

export default angular
	.module('codemotion.search', [
		'ionic',
		'ionic-timepicker',
		'ui.router'
	])
	.config(route)
	.controller('SearchController', controller)
	.name;