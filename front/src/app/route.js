export default function AppRoute($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/codemotion/home');

	$stateProvider
		.state('codemotion', {
			abstract: true,
			cache: false,
			url: '/codemotion',
			templateUrl: "src/app/template.html"
		})
};