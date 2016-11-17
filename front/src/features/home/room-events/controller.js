export default function RoomEventsController($scope, $state, $roomEvents, $agenda, $ionicSlideBoxDelegate) {
    'ngInject'

    var vm = this;

    vm.rooms = [];

    vm.styles = {
        item: 'tab-item',
        actived: 'active'
    };

    vm.tabs = {
        viernes: vm.styles.item + ' ' + vm.styles.actived,
        sabado: vm.styles.item,
        tabActive: 'viernes'
    };

    vm.goDetail = goDetail;
    vm.onSelect = onSelect;
    vm.tabClick = tabClick;
    vm.onSlideChange = onSlideChange;

    init();

    function init() {
        updateTalksById($agenda.getIdToRoomEvents());

        $agenda.getTracks()
            .then((res) => {
                vm.rooms = res.filter((room, index) => index < 12);
                vm.rooms.forEach(assign);
            })

        function assign(element) {
            element.id === $agenda.getIdToRoomEvents() ? vm.confirmed = element.name : undefined;
        }
    }

    function goDetail() {
        $state.go('home.event-details');
    }

    function onSelect() {
        updateTalksByName(vm.confirmed);
    };

    function tabClick(name) {
        vm.tabs[vm.tabs.tabActive] = vm.styles.item;
        vm.tabs[name] = vm.styles.item + ' ' + vm.styles.actived;
        vm.tabs.tabActive = name;
        var arr = Object.keys(vm.tabs);
        $ionicSlideBoxDelegate.slide(arr.indexOf(name));
    };

    function onSlideChange(index) {
        var arr = Object.keys(vm.tabs);
        vm.tabs[vm.tabs.tabActive] = vm.styles.item;
        vm.tabs[arr[index]] = vm.styles.item + ' ' + vm.styles.actived;
        vm.tabs.tabActive = arr[index];
    };

    function updateTalksById(roomId){
        $agenda.getTalks()
            .then($agenda.getTracks)
            .then($agenda.getDays)
            .then(days => {
                let vietrack = $agenda.getTrackById(roomId);
                let satTrack = $agenda.getTrackByDayAndName(days[1].id, vietrack[0].name);
                vm.vieTalks = $agenda.getTalksByDayAndTrack(days[0].id, roomId);
                vm.satTalks = $agenda.getTalksByDayAndTrack(days[1].id, satTrack[0].id);
            });
    };

    function updateTalksByName(name){
        $agenda.getTalks()
            .then($agenda.getTracks)
            .then($agenda.getDays)
            .then(days => {
                let vietrack = $agenda.getTracksByName(name);
                let satTrack = $agenda.getTrackByDayAndName(days[1].id, name);
                vm.vieTalks = $agenda.getTalksByDayAndTrack(days[0].id, vietrack[0].id);
                vm.satTalks = $agenda.getTalksByDayAndTrack(days[1].id, satTrack[0].id);
            });
    };
}