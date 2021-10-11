// display current date
// get date
var currentDate = moment().format("dddd, MMMM Do YYYY");
// add date to p element
var showDate = $("#currentDay").text(currentDate);

// change task
$(".list-group").on("click","p", function () {
    console.log("<p> was clicked");
});
