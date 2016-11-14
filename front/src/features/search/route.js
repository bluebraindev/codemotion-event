export default function InfoRoute($stateProvider) {

	$stateProvider
		.state('info', {
			parent: 'codemotion',
			cache: false,
			url: '/info',
			templateUrl: "src/features/info/template.html"
		})
};