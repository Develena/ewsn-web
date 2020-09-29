//basic line chart
Highcharts.chart('basicLineChart', {
    title: {
        text: '수신감도(RSSI) 기간별 현황',
    },

    yAxis: {
        title: {
            text: 'RSSI (dBm)',
        },
    },

    xAxis: {
        categories: [
            '00:00',
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
            '23:00',
        ],
    },

    plotOptions: {
        series: {
            marker: {
                enabled: false,
            },
        },
    },

    series: [
        {
            name: '상향',
            data: [-90, -80, -75, -70, -75, -72, -80, -75, -70, -75, -72, -80, -75, -70, -75, -72, -80, -75, -70, -75, -72, -80, -75, -70],
        },
        {
            name: '하향',
            data: [-80, -90, -75, -87, -88, -95, -80, -90, -75, -87, -88, -95, -80, -90, -75, -87, -88, -95, -80, -90, -75, -87, -88, -95],
        },
    ],
});

//basic bar chart
Highcharts.chart('basicBarChart', {
    chart: {
        type: 'column',
    },
    title: {
        text: '알람 현황 (누적)',
    },
    xAxis: {
        crosshair: true,
    },
    yAxis: {
        min: 0,
    },
    tooltip: {
        enabled: false,
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
        },
    },
    series: [
        {
            name: '정전',
            data: [5],
        },
        {
            name: '메모리경고',
            data: [15],
        },
        {
            name: '전계강도 초과',
            data: [20],
        },
        {
            name: '리셋',
            data: [5],
        },
        {
            name: '기타',
            data: [19],
        },
    ],
});

//basic pie chart
Highcharts.chart('basicPieChart', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
    },
    title: {
        text: null,
    },
    tooltip: {
        pointFormat: ': <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
        point: {
            valueSuffix: '%',
        },
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                format: '{point.percentage:.f} %',
                distance: -30,
                color: 'white',
                style: {
                    fontFamily: "'Noto Sans KR', sans-serif",
                    fontWeight: 500,
                    textOutline: false,
                    letterSpacing: '-0.055em',
                },
            },
            center: ['50%', '50%'],
            size: '110%',
            showInLegend: true,
        },
    },
    series: [
        {
            type: 'pie',
            innerSize: '40%',
            data: [
                ['정전', 50],
                ['전계강도 초과', 20],
                ['메모리 경고', 20],
                ['기타', 10],
            ],
        },
    ],
    colors: [
        '#4CAF50', //정전
        '#2c7be5', //전계강도 초과
        '#ff9800', //메모리 경고
        '#6f42c1', //기타
    ],
});
