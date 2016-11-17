class EventController {
    constructor($state, $agenda) {
        this._state = $state;
        this._agenda = $agenda;
    };

    $onChanges(changes) {
        if (changes.data) {
            this.data = Object.assign({}, changes.data.currentValue);
        };
    };

    $onInit() {
        this.show = {
            event: this.data.contents.type !== "EXTEND",
            break: this.data.contents.type === "BREAK"
        }
    }
    goDetails(id) {
        this._agenda.setEventId(id);
        this._state.go('home.event-details');
    }
}

export default EventController