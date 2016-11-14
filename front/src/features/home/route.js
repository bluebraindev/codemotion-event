export default function HomeRoute($stateProvider) {

	$stateProvider
		.state('home', {
			parent: 'codemotion',
			cache: false,
			url: '/home',
			templateUrl: "src/features/home/template.html"
		})
};