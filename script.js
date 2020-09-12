console.log(moment().format('dddd, MMMM Do YYYY'))
$("#currentDate").text(moment().format('dddd, MMMM Do YYYY'))
console.log(moment().format('H'));

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

// $("button").on("click", function(){
//     console.log($("this").attr("id"))
// })


// if (hour = moment().format('H')) {
//     $("#" + hour).addClass("present");
// }
// if (hour > moment().format('H')) {
//     $("#" + hour).addClass("future");
// }