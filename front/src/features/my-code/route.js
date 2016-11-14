export default function MyCodeRoute($stateProvider) {

	$stateProvider
		.state('my-code', {
			parent: 'codemotion',
			cache: false,
			url: '/my-code',
			templateUrl: "src/features/my-code/template.html"
		})
};