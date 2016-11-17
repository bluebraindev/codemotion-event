export default function AgendaService($http, $q) {
    'ngInject'

    let days;
    let talks;
    let tracks;
    let idFromTrack;
    let eventId;

    this.getDays = getDays;
    this.getTalks = getTalks;
    this.getTracks = getTracks;
    this.getTalksByDay = getTalksByDay;
    this.getTalksByDate = getTalksByDate;
    this.getTalksByTrack = getTalksByTrack;
    this.getTracksByDay = getTracksByDay;
    this.getDayByName = getDayByName;
    this.getTalkById = getTalkById;
    this.setIdFromTrack = setIdFromTrack;
    this.getIdToRoomEvents = getIdToRoomEvents;
    this.setEventId = setEventId;
    this.getEventId = getEventId;
    this.getTalksByDayAndTrack = getTalksByDayAndTrack;
    this.getTrackById = getTrackById;
    this.getTracksByName = getTracksByName;
    this.getTrackByDayAndName = getTrackByDayAndName;

    function getDays() {
        let q = $q.defer();

        $http.get('json/days.json').then(data => {
            days = data.data;
            q.resolve(days);
        });

        return q.promise;
    };

    function getTracks() {
        let q = $q.defer();

        $http.get('json/tracks.json').then(data => {
            tracks = data.data;
            q.resolve(tracks);
        });

        return q.promise;
    };

    function getTalks() {
        let q = $q.defer();

        $http.get('json/talks.json').then(data => {
            talks = data.data;
            q.resolve(talks);
        });

        return q.promise;
    };

    function setIdFromTrack(id) {
        idFromTrack = id;
    }

    function getIdToRoomEvents() {
        return idFromTrack;
    }

    function setEventId(id) {
        eventId = id;
    }

    function getEventId() {
        return eventId;
    }

    function getTracksByDay(id) {
        return tracks.filter(track => track.dayId === id);
    }

    function getTrackById(id) {
        return tracks.filter(track => track.id === id);
    }

    function getTracksByName(name) {
        return tracks.filter(track => track.name === name);
    }

    function getTrackByDayAndName(id, name) {
        return tracks.filter(track => track.dayId === id && track.name === name);
    }

    function getTalksByDay(id) {
        return talks.filter(talk => talk.dayId === id);
    }

    function getTalksByTrack(id) {
        return talks.filter(talk => talk.trackId === id);
    }

    function getTalkById(id) {
        return talks.filter(talk => talk.id === id);
    }

    function getTalksByDayAndTrack(day, track) {
        return talks.filter(talk => talk.trackId === track && talk.dayId === day);
    }

    function getDayByName(name) {
        return days.filter(day => day.name === name);
    }

    function getTalksByDate(start, end) {
        return talks.filter(talk => {
            let startTalk = moment(talk.startDate).unix();
            let endTalk = moment(talk.endDate).unix();
            let startParse = moment(start).unix();
            let endParse = moment(end).unix();

            return startTalk >= startParse && endTalk <= endParse;
        });
    }
}