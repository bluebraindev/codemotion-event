class EventController {
    constructor() {};

    $onChanges(changes) {
        if (changes.data) {
            this.data = Object.assign({}, changes.data.currentValue);
        };
    };

    $onInit(){
        this.show = {
            event: this.data.contents.type !== "EXTEND";
        }
    }
}

export default EventController