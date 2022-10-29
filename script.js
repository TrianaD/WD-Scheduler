
// the current hour 

var currenthour = moment().format("HH");
console.log(currenthour);

// todays date in format day of week, month and day

var today = moment().format('dddd, MMMM Do');
$('#currentDay').text(today);

console.log(today);





// assessing current hour against calendar "hourly" 
// when both equal adds class to change color of block
// when less or more changes accordingly to show past vs present 

$(".time-div").each(function () {

    var hourly = $(this).attr("id").split("-")[1];
    console.log(hourly);

    if (currenthour == hourly) {
        $(this).addClass("present");
        $(this).children(".event").addClass("pink-text");
    } else if (currenthour < hourly) {
        $(this).removeClass("present");
        $(this).addClass("future");

    } else if (currenthour > hourly) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});


// saves data within event block and associates with hour/time column

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".event").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
});


// calls out local storage 

$("#-09 .event").val(localStorage.getItem("09"));

$("#-10 .event").val(localStorage.getItem("10"));

$("#-11 .event").val(localStorage.getItem("11"));

$("#-12 .event").val(localStorage.getItem("12"));

$("#-13 .event").val(localStorage.getItem("13"));

$("#-14 .event").val(localStorage.getItem("14"));

$("#-15 .event").val(localStorage.getItem("15"));

$("#-16 .event").val(localStorage.getItem("16"));

$("#-17 .event").val(localStorage.getItem("17"));

$("#-18 .event").val(localStorage.getItem("18"));

$("#-19 .event").val(localStorage.getItem("19"));

$("#-20 .event").val(localStorage.getItem("20"));

$("#-08 .event").val(localStorage.getItem("08"));



