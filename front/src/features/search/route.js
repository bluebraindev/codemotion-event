export default function SearchRoute($stateProvider) {

	$stateProvider
		.state('search', {
			parent: 'codemotion',
			cache: false,
			url: '/search',
			templateUrl: "src/features/search/template.html"
		})
};