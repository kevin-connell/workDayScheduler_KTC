$("#currentDate").text(moment().format('dddd, MMMM Do YYYY'))

for (hour = 9; hour < 18; hour++) {
    if (hour < moment().format('H')) {
        $("#" + hour).addClass("past");
    } else {
        if (hour = moment().format('H')) {
            $("#" + hour).addClass("present");
        } else {
            $("#" + hour).addClass("future");
        }
    } 
}

var schedule = JSON.parse(localStorage.getItem("localSchedule")) || ["" , "" , "" , "" , "" , "" , "" , "" , ""]

for (index = 0; index < schedule.length; index++) {
    $("#" + (index + 9)).val(schedule[index]) 
}

$('button').click(function () {
    var indNum = (parseInt($(this).attr('id'))) - 9
    schedule[indNum]= $("#" + (parseInt($(this).attr('id')))).val()
    localStorage.setItem("localSchedule" , JSON.stringify(schedule))
});
