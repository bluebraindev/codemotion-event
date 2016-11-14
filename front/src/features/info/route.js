export default function SpeakerRoute($stateProvider) {

	$stateProvider
		.state('speaker', {
			parent: 'codemotion',
			cache: false,
			url: '/speaker',
			templateUrl: "src/features/speaker/template.html"
		})
};