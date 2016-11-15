import route from './route'

export default angular
	.module('codemotion.search', [
		'ui.router'
	])
	.config(route)
	.name;