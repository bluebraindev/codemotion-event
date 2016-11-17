import route from './route'
import Controller from './controller';

export default angular
	.module('codemotion.info', [
		'ui.router'
	])
	.config(route)
	.controller('InfoController', Controller)
	.name;