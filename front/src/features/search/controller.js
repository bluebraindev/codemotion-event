export default function SearchController(ionicTimePicker, $agenda) {
    'ngInject'
    let vm = this;
    vm.openTimePicker = openTimePicker;
    vm.searchTalks = searchTalks;

    init();

    function init() {
        vm.startTime = moment().hour() + ':00';
        vm.endTime = (moment().hour() + 1) + ':00';
        $agenda.getDays().then(days => {
            vm.days = angular.copy(days);
            vm.selectDay = vm.days[0].name;
            $agenda.getTalks().then(() => {
                vm.talks = $agenda.getTalksByDate(days[0].date + ' ' + vm.startTime, days[0].date + ' ' + vm.endTime);
                vm.array = {
                    empty: !vm.talks.length > 0
                };
            })
        });

    };

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
                searchTalks();
            }
        }
    };

    function searchTalks() {
        $agenda.getTalks().then($agenda.getDays).then(() => $agenda.getDayByName(vm.selectDay)).then(day => {
            vm.talks = $agenda.getTalksByDate(day[0].date + ' ' + vm.startTime, day[0].date + ' ' + vm.endTime);
            vm.array = {
                empty: !vm.talks.length > 0
            };
        });
    }
}