const grid_key = 'Yesinsoft,_Inc._on_behalf_of_NURI_Telecom_Co.,_Ltd._MultiApp_1Devs25_September_2020__MTYwMDk4ODQwMDAwMA==9b1e8d92b0a4b8000a23bef3508ba47e';
agGrid.LicenseManager.setLicenseKey(grid_key);

//검색 결과 테이블 옵션
var SearchResultOptions = {
    columnDefs: [
        { headerName: '본부', field: 'headquarter', cellClass: 'grid-cell-centered' },
        { headerName: '단말 번호', field: 'serialnumber', cellClass: 'grid-cell-centered', minWidth: 100 },
        {
            headerName: '구분',
            field: 'kind',
            cellClass: 'grid-cell-centered',
            cellClassRules: {
                // 구분 배경 및 폰트 스타일 지정 클래스
                'grid-cell-bg-circle grid-cell-bg-circle-gateway-connected': function (params) {
                    return params.value === 'G-con';
                },
                'grid-cell-bg-circle grid-cell-bg-circle-gateway-unconnected': function (params) {
                    return params.value === 'G-uncon';
                },
                'grid-cell-bg-circle grid-cell-bg-circle-gateway-unregistered': function (params) {
                    return params.value === 'G-unregis';
                },
                'grid-cell-bg-circle grid-cell-bg-device-connected': function (params) {
                    return params.value === 'D-con';
                },
                'grid-cell-bg-circle grid-cell-bg-device-unconnected': function (params) {
                    return params.value === 'D-uncon';
                },
                'grid-cell-bg-circle grid-cell-bg-device-unregistered': function (params) {
                    return params.value === 'D-unregis';
                },
            },
        },
        { headerName: '상태', field: 'status', cellClass: 'grid-cell-centered', minWidth: 65 },
        { headerName: '통신일시', field: 'date', cellClass: 'grid-cell-centered grid-cell-wrap-text', minWidth: 85 },
    ],
    rowData: [
        { headquarter: '경기', serialnumber: 'GW202001', kind: 'G-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200011', kind: 'G-uncon', status: '미연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200012', kind: 'G-unregis', status: '미등록', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200013', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-uncon', status: '미연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-unregis', status: '미등록', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
        { headquarter: '경기', serialnumber: 'DEV200014', kind: 'D-con', status: '연결', date: '20-08-25 10:00:01' },
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
    //검색 결과
    var searchResult = document.querySelector('#SearchResultTable');
    new agGrid.Grid(searchResult, SearchResultOptions);
});
