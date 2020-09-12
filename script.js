// displaying the current date

$("#currentDate").text(moment().format('dddd, MMMM Do YYYY'))

// applying classes based on whether the hour is past, present or in the future

for (hour = 9; hour < 18; hour++) {
    if (hour < moment().format('H')) {
        $("#" + hour).addClass("past");
    }
    if (hour == moment().format('H')) {
         $("#" + hour).addClass("present");
    } 
    if (hour > moment().format('H')) {
        $("#" + hour).addClass("future");
    }
}

// retrieve local storage OR return emtpy array

var schedule = JSON.parse(localStorage.getItem("localSchedule")) || ["", "", "", "", "", "", "", "", ""]

// insert the retrieved schedule data into the appropriate time blocks

for (index = 0; index < schedule.length; index++) {
    $("#" + (index + 9)).val(schedule[index])
}

// if any save button is clicked, save that data to local storage

$('button').click(function () {
    var indNum = (parseInt($(this).attr('id'))) - 9
    schedule[indNum] = $("#" + (parseInt($(this).attr('id')))).val()
    localStorage.setItem("localSchedule", JSON.stringify(schedule))
});
