import route from './route'
import controller from './controller'

export default angular
	.module('codemotion.home', [
		'ui.router'
	])
	.config(route)
	.controller('homeController', controller)
	.name;