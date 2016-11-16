export default function($state, $http, $q) {
    'ngInject'

    return {
        getRooms: getRooms,
        getFridayEventsByTrack: getFridayEventsByTrack,
        getEventsByDayTrack: getEventsByDayTrack
    }

    function getRooms() {
        var q = $q.defer();

        $http
            .get('/agenda-code.json')
            .then(getSuccess, getError);

        function getSuccess(response) {
            var days = response.data.days;
            var rooms = [];

            days.forEach(function(element) {
                rooms = element.tracks;
            });
            
            q.resolve(rooms);
        }

        function getError(err) {
            q.reject(err);
        }

        return q.promise;
    }

    function getFridayEventsByTrack(trackName) {
        var q = $q.defer();

        $http
            .get('/agenda-code.json')
            .then(getSuccess, getError);

        function getSuccess(response) {
            var tracks = response.data.days[0].tracks;
            var slotsTrack = [];

            tracks.forEach(function(track) {
                if (track.name === trackName) {
                    track.slots.forEach(function(element)   {
                        element.contents.authors = (element.contents.authors != undefined) ? element.contents.authors : '/build/img/icon.png';
                    });
                    slotsTrack = track.slots;
                }                
            });

            console.log(slotsTrack);
            q.resolve(slotsTrack);
        }

        function getError(err) {
            q.reject(err);
        }

        return q.promise;
    }

    function getEventsByDayTrack(trackName, day) {
        var q = $q.defer();

        $http
            .get('/agenda-code.json')
            .then(getSuccess, getError);

        function getSuccess(response) {
            var tracks = response.data.days[day].tracks;
            var slotsTrack = [];

            tracks.forEach(function(track) {
                if (track.name === trackName) {
                    track.slots.forEach(function(element)   {
                        element.contents.authors = (element.contents.authors != undefined) ? element.contents.authors : '/build/img/icon.png';
                    });
                    slotsTrack = track.slots;
                }                
            });

            q.resolve(slotsTrack);
        }

        function getError(err) {
            q.reject(err);
        }

        return q.promise;
    }
}