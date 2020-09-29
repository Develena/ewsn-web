//단말 등록 현황 차트
Highcharts.chart('terminalRegisGraph', {
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
        },
    },
    series: [
        {
            type: 'pie',
            innerSize: '40%',
            data: [
                ['연결', 50],
                ['미등록', 33],
                ['미연결', 17],
            ],
        },
    ],
    colors: [
        '#4CAF50', //연결
        '#2c7be5', //미등록
        '#ff9800', //미연결
    ],
});

//단말 알람 현황 차트
Highcharts.chart('terminalAlarmGraph', {
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

//금일 이벤트 현황 그래프
Highcharts.chart('todayEventGraph', {
    chart: {
        type: 'bar',
        margin: 0,
        padding: 0,
    },
    title: {
        text: null,
    },
    tooltip: {
        valueSuffix: ' 건',
    },
    xAxis: {
        categories: [''],
        visible: false,
    },
    yAxis: {
        min: 0,
        max: 100,
        title: null,
        visible: false,
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {
            stacking: 'normal',
        },
    },
    series: [
        {
            name: 'info',
            data: [95],
        },
        {
            name: 'warn',
            data: [10],
        },
        {
            name: 'error',
            data: [20],
        },
        {
            name: 'critical',
            data: [15],
        },
    ],
    colors: [
        '#34c759', //info
        '#ffd900', //warn
        '#ff9500', //error
        '#ff3b30', //critical
    ],
});

//수신감도(RSSI) 현황 그래프
Highcharts.chart('rssiGraph', {
    chart: {
        zoomType: 'xy',
    },
    title: {
        text: null,
    },
    xAxis: [
        {
            categories: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            crosshair: true,
        },
    ],
    yAxis: [
        {
            // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: Highcharts.getOptions().colors[2],
                },
            },
            title: {
                text: 'Temperature',
                style: {
                    color: Highcharts.getOptions().colors[2],
                },
            },
            opposite: true,
        },
        {
            // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Rainfall',
                style: {
                    color: Highcharts.getOptions().colors[0],
                },
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[0],
                },
            },
        },
        {
            // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Sea-Level Pressure',
                style: {
                    color: Highcharts.getOptions().colors[1],
                },
            },
            labels: {
                format: '{value} mb',
                style: {
                    color: Highcharts.getOptions().colors[1],
                },
            },
            opposite: true,
        },
    ],
    tooltip: {
        shared: true,
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 0,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)',
    },
    series: [
        {
            name: 'Rainfall',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6],
            tooltip: {
                valueSuffix: ' mm',
            },
        },
        {
            name: 'Sea-Level Pressure',
            type: 'spline',
            yAxis: 2,
            data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6],
            marker: {
                enabled: false,
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ' mb',
            },
        },
        {
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2],
            tooltip: {
                valueSuffix: ' °C',
            },
        },
    ],
});

//데이터 송수신 현황
Highcharts.chart('dataSendReceiveGraph', {
    chart: {
        type: 'column',
    },
    title: {
        text: null,
    },
    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. Age {xDescription}, {value}%.',
        },
    },
    xAxis: [
        {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
    ],
    yAxis: {
        title: {
            text: null,
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value) + '%';
            },
        },
        accessibility: {
            description: 'Percentage population',
            rangeDescription: 'Range: 0 to 100%',
        },
    },

    plotOptions: {
        series: {
            stacking: 'normal',
        },
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' + 'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
        },
    },

    series: [
        {
            name: 'Male',
            data: [-50, -65, -73, -42, -27, -30, -80, -62, -90, -40, -88, -60, -50, -65, -73, -42, -27, -30, -80, -62, -90, -40, -88, -60],
        },
        {
            name: 'Female',
            data: [27, 39, 81, 51, 76, 86, 68, 53, 63, 51, 27, 88, 27, 39, 81, 51, 76, 86, 68, 53, 63, 51, 27, 88],
        },
    ],
});
