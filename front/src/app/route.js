export default function AppRoute($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('codemotion', {
			abstract: true,
			cache: false,
			url: '/codemotion',
			templateUrl: "src/app/template.html"
		})
};