export default function InfoRoute($stateProvider) {

	$stateProvider
		.state('search', {
			parent: 'codemotion',
			cache: false,
			url: '/search',
			views: {
				'bodyView': {
					templateUrl: "src/features/search/template.html",
					controller: 'SearchController as vm'
				}
			}
		})
};