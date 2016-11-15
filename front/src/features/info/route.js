export default function SpeakerRoute($stateProvider) {

	$stateProvider
		.state('speaker', {
			parent: 'codemotion',
			cache: false,
			url: '/speaker',
			views: {
                'bodyView': {
					templateUrl: "src/features/speaker/template.html"
				}
			}
		})
};