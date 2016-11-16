export default function AgendaService ($http){
    'ngInject'

    let days = $http.get('json/days.json').then(data => data);
    let talks = $http.get('json/talks.json').then(data => data);
    let tracks = $http.get('json/tracks.json').then(data => data);

    let getDays = () => days;
    let getTracks = () => tracks;
    let getTalks = () => talks;

    this.getDays = getDays;
    this.getTalks = getTalks;
    this.getTracks = getTracks;
    this.getTalksByDay = getTalksByDay;
    this.getTalksByDate = getTalksByDate;
    this.getTalksByTrack = getTalksByTrack;
    this.getTracksByDay = getTracksByDay;
    this.getTalkById = getTalkById;


    function getTracksByDay(id){
        return tracks.filter(track => track.dayId === id);
    }

    function getTalksByDay(id){
        return talks.filter(talk => talk.dayId === id);
    }

    function getTalksByTrack(id){
        return talks.filter(talk => talk.trackId === id);
    }

    function getTalkById(id){
        return talks.filter(talk => talk.id === id);
    }

    function getTalksByDate(start, end){
        return talks.filter(talk => {
            let startTalk = moment(talk.startDate).format('YYYY-MM-DD').valueOf();
            let endTalk = moment(talk.endDate).format('YYYY-MM-DD').valueOf();
            let startParse = moment(start).format('YYYY-MM-DD').valueOf();
            let endParse = moment(end).format('YYYY-MM-DD').valueOf();
            
            return startTalk >= startParse && endTalk >= endParse;
        });
    }
}