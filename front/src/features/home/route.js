export default function HomeRoute($stateProvider) {
	$stateProvider
		.state('home', {
			parent: 'codemotion',
			cache: false,
			url: '/home',
			views: {
				'bodyView': {
					templateUrl: "src/features/home/template.html"
				}
			}
		})
};