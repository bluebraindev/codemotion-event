export default function SearchController(ionicTimePicker) {
    'ngInject'
    let vm = this;

    vm.openTimePicker = openTimePicker;

    function openTimePicker(time, label) {
        let ipObj1 = {
            callback: function (val) {      //Mandatory
                if (typeof (val) === 'undefined') {
                    console.log('Time not selected');
                } else {
                    var selectedTime = new Date(val * 1000);
                    console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
                }
            },
            inputTime: 50400,   //Optional
            format: 24,         //Optional
            step: 15,           //Optional
            setLabel: 'OK'    //Optional
        };

        ionicTimePicker.openTimePicker(ipObj1);
    };

}