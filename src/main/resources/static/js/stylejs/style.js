$(function () {
    //현재시간
    var newDate = new Date();
    $('#currentDate').html(newDate.getFullYear() + ' - ' + (newDate.getMonth() + 1 < 10 ? '0' : '') + (newDate.getMonth() + 1) + ' - ' + (newDate.getDate() < 10 ? '0' : '') + newDate.getDate());

    setInterval(function () {
        var newDate = new Date();
        $('#currentTime').html([
            (newDate.getHours() < 10 ? '0' : '') +
                newDate.getHours() +
                ' : ' +
                (newDate.getMinutes() < 10 ? '0' : '') +
                newDate.getMinutes() +
                ' : ' +
                (newDate.getSeconds() < 10 ? '0' : '') +
                newDate.getSeconds(),
        ]);
    }, 1000);

    //tab 기간별, 일별 datepicker & table show/hide
    $('.tab_panel_radio_wrapper').click(function () {
        if ($('#radioByPeriod').is(':checked')) {
            $('.date_wrapper_byperiod').fadeIn(300);
            $('.date_wrapper_bydaily').hide();
        } else if ($('#radioByDaily').is(':checked')) {
            $('.date_wrapper_byperiod').hide();
            $('.date_wrapper_bydaily').fadeIn(300);
        }
    });
});
