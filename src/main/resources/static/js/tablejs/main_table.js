const grid_key = 'Yesinsoft,_Inc._on_behalf_of_NURI_Telecom_Co.,_Ltd._MultiApp_1Devs25_September_2020__MTYwMDk4ODQwMDAwMA==9b1e8d92b0a4b8000a23bef3508ba47e';
agGrid.LicenseManager.setLicenseKey(grid_key);

//단말 등록 현황 테이블 옵션
var terminalRegisOptions = {
    columnDefs: [
        { headerName: '', field: 'category', minWidth: 85 },
        { headerName: '전체', field: 'all', cellClass: 'grid-cell-centered', minWidth: 60 },
        { headerName: '연결', field: 'connected', cellClass: 'grid-cell-centered', minWidth: 60 },
        { headerName: '미연결', field: 'disconnected', cellClass: 'grid-cell-centered', minWidth: 80 },
        { headerName: '미등록', field: 'unregistered', cellClass: 'grid-cell-centered', minWidth: 80 },
    ],
    rowData: [
        { category: 'G/W', all: 4, connected: 3, disconnected: 1, unregistered: 0 },
        { category: 'Device', all: 11, connected: 5, disconnected: 5, unregistered: 1 },
    ],
    headerHeight: 36,
    rowHeight: 42,
    onFirstDataRendered: onFirstDataRendered,
};

//단말 알람 현황 테이블 옵션
var terminalAlarmOptions = {
    columnDefs: [
        {
            headerName: '',
            field: 'category',
            minWidth: 160,
            maxWidth: 180,
            cellClassRules: {
                // 카테고리 앞 '●' 를 추가하기 위한 클래스
                'grid-cell-circle grid-cell-circle-blackout': function (params) {
                    return params.value === '정전';
                },
                'grid-cell-circle grid-cell-circle-mem-warning': function (params) {
                    return params.value === '메모리 경고';
                },
                'grid-cell-circle grid-cell-circle-excess': function (params) {
                    return params.value === '전계강도 초과';
                },
                'grid-cell-circle grid-cell-circle-etc': function (params) {
                    return params.value === '기타';
                },
            },
        },
        { headerName: '전체', field: 'all', cellClass: 'grid-cell-centered' },
        { headerName: 'G/W', field: 'GW', cellClass: 'grid-cell-centered' },
        { headerName: 'Device', field: 'device', cellClass: 'grid-cell-centered', minWidth: 80 },
    ],
    rowData: [
        { category: '정전', all: 5, GW: 4, device: 1 },
        { category: '메모리 경고', all: 2, GW: 1, device: 1 },
        { category: '전계강도 초과', all: 2, GW: 2, device: 1 },
        { category: '기타', all: 1, GW: 2, device: 1 },
    ],
    headerHeight: 36,
    rowHeight: 42,
    onFirstDataRendered: onFirstDataRendered,
};

//금일 이벤트 현황 테이블 옵션
var todayEventOptions = {
    columnDefs: [
        {
            headerName: '',
            field: 'category',
            cellClassRules: {
                // 'Total' 폰트 스타일 지정 클래스
                'grid-cell-total-text': function (params) {
                    return params.value === 'Total';
                },
                // 카테고리 앞 '●' 를 추가하기 위한 클래스
                'grid-cell-circle grid-cell-circle-info': function (params) {
                    return params.value === 'Info';
                },
                'grid-cell-circle grid-cell-circle-warn': function (params) {
                    return params.value === 'Warn';
                },
                'grid-cell-circle grid-cell-circle-error': function (params) {
                    return params.value === 'Error';
                },
                'grid-cell-circle grid-cell-circle-critical': function (params) {
                    return params.value === 'Critical';
                },
            },
        },
        { headerName: '', field: 'count' },
    ],
    rowData: [
        { category: 'Total', count: 95 + '건' },
        { category: 'Info', count: 50 + '건' },
        { category: 'Warn', count: 10 + '건' },
        { category: 'Error', count: 20 + '건' },
        { category: 'Critical', count: 15 + '건' },
    ],
    headerHeight: 0,
    rowHeight: 42,
    onFirstDataRendered: onFirstDataRendered,
};

//실시간 이벤트 모니터링 테이블 옵션
var realTimeEventOptions = {
    columnDefs: [
        {
            headerName: '등급',
            field: 'level',
            minWidth: 80,
            cellClass: 'grid-cell-centered',
            cellClassRules: {
                // 카테고리 배경 및 폰트 스타일 지정 클래스
                'grid-cell-bg grid-cell-bg-info': function (params) {
                    return params.value === 'Info';
                },
                'grid-cell-bg grid-cell-bg-warn': function (params) {
                    return params.value === 'Warn';
                },
                'grid-cell-bg grid-cell-bg-error': function (params) {
                    return params.value === 'Error';
                },
                'grid-cell-bg grid-cell-bg-critical': function (params) {
                    return params.value === 'Critical';
                },
            },
        },
        { headerName: '이벤트 발생일시', field: 'date', cellClass: 'grid-cell-centered', minWidth: 220 },
        { headerName: '본부', field: 'location', cellClass: 'grid-cell-centered', minWidth: 80 },
        { headerName: '단말번호', field: 'serialnumber', cellClass: 'grid-cell-centered', minWidth: 120 },
        { headerName: '단말구분', field: 'terminal', cellClass: 'grid-cell-centered', minWidth: 120 },
        { headerName: '이벤트구분', field: 'status', cellClass: 'grid-cell-centered', minWidth: 130 },
        { headerName: '내용', field: 'note', minWidth: 280 },
    ],
    rowData: [
        { level: 'Info', date: '2018-03-27 15:45:01.109', location: '경기', serialnumber: 'DEV200011', terminal: '게이트웨이', status: '리셋', note: '자동주기 리셋' },
        { level: 'Warn', date: '2018-03-27 15:45:01.109', location: '경기', serialnumber: 'DEV200012', terminal: '디바이스', status: '등록', note: '단말 서버 등록' },
        { level: 'Error', date: '2018-03-27 15:45:01.109', location: '경기', serialnumber: 'DEV200013', terminal: '디바이스', status: '전계강도', note: '전계강도(RSSI) 임계값 초과' },
        { level: 'Critical', date: '2018-03-27 15:45:01.109', location: '경기', serialnumber: 'DEV200014', terminal: '디바이스', status: '전송', note: '전송 실패' },
        { level: 'Warn', date: '2018-03-27 15:45:01.109', location: '경기', serialnumber: 'DEV200012', terminal: '디바이스', status: '등록', note: '단말 서버 등록' },
        { level: 'Error', date: '2018-03-27 15:45:01.109', location: '경기', serialnumber: 'DEV200013', terminal: '디바이스', status: '전계강도', note: '전계강도(RSSI) 임계값 초과' },
    ],
    headerHeight: 36,
    rowHeight: 42,
    onFirstDataRendered: onFirstDataRendered,
};

function onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();

    window.addEventListener('resize', function () {
        setTimeout(function () {
            params.api.sizeColumnsToFit();
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    //단말 등록 현황
    var terminalRegis = document.querySelector('#terminalRegisTable');
    new agGrid.Grid(terminalRegis, terminalRegisOptions);

    //단말 알람 현황
    var terminalAlarm = document.querySelector('#terminalAlarmTable');
    new agGrid.Grid(terminalAlarm, terminalAlarmOptions);

    //금일 이벤트 현황
    var todayEvent = document.querySelector('#todayEventTable');
    new agGrid.Grid(todayEvent, todayEventOptions);

    //실시간 이벤트 모니터링
    var realTimeEvent = document.querySelector('#realTimeEventTable');
    new agGrid.Grid(realTimeEvent, realTimeEventOptions);

    //모든 테이블 autoheight
    terminalRegisOptions.api.setDomLayout('autoHeight');
    terminalAlarmOptions.api.setDomLayout('autoHeight');
    todayEventOptions.api.setDomLayout('autoHeight');
    realTimeEventOptions.api.setDomLayout('autoHeight');
});
