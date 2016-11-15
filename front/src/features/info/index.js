import route from './route'

export default angular
	.module('codemotion.info', [
		'ui.router'
	])
	.config(route)
	.name;