export default function SearchController(ionicTimePicker, $log, $agenda, $scope) {
    'ngInject'
    let vm = this;
    vm.openTimePicker = openTimePicker;
    
    init();

    function init() {
        vm.startTime = moment().hour() + ':00';
        vm.endTime = (moment().hour() + 1) + ':00';
        $agenda.getDays().then(days => {
            vm.days = angular.copy(days);
            vm.selected = vm.days[0];
            $agenda.getTalks().then(() => {
                vm.talks = $agenda.getTalksByDate(days[0].date + ' ' + vm.startTime, days[0].date + ' ' + vm.endTime);
            })
        });

    }

    function openTimePicker(time, type) {
        let pickObj = {
            callback: updateHour,
            inputTime: moment(time, 'HH:mm').hour() * 3600 + moment(time, 'HH:mm').minute() * 60,
            format: 24,
            step: 15,
            setLabel: 'OK'
        };
        ionicTimePicker.openTimePicker(pickObj);

        function updateHour(val) {
            if (typeof (val) === 'undefined') {
                $log.info('Time not selected');
            } else {
                let hour = parseInt(val / 3600, 10);
                let min = (val - hour * 3600) / 60 < 10 ? '0' + (val - hour * 3600) / 60 : (val - hour * 3600) / 60;
                time = moment(moment().format('YYYY-MM-DD').valueOf() + ' ' + hour + ':' + min).format('HH:mm');
                
                if ('start' === type) {
                    vm.startTime = time;
                } else {
                    vm.endTime = time;
                };

                $agenda.getTalks().then(() => {
                    vm.talks = $agenda.getTalksByDate(vm.selected.date + ' ' + vm.startTime, vm.selected.date + ' ' + vm.endTime);
                });
            }
        }
    };
}