export default function InfoRoute($stateProvider) {
	$stateProvider
		.state('info', {
			parent: 'codemotion',
			cache: false,
			url: '/info',
			views: {
                'bodyView': {
					templateUrl: "src/features/info/template.html",
					controller: 'InfoController as vm'
				}
			}
		})
};