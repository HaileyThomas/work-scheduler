// VARIABLES
var taskArray = [];

var currentArray = localStorage.getItem("array");
var nineEl = taskArray[0];
var tenEl = taskArray[1];
var elevenEl = taskArray[2];
var twelveEl = taskArray[3];
var oneEl = taskArray[4];
var twoEl = taskArray[5];
var threeEl = taskArray[6];
var fourEl = taskArray[7];
var fiveEl = taskArray[8];
console.log("nineEl: " + nineEl);
console.log("currentArray: " + currentArray);

// DISPLAY CURRENT DATE
var currentDate = moment().format("dddd, MMMM Do YYYY");
// add date to p element
var showDate = $("#currentDay").text(currentDate);

// TIME
var currentTime = moment();
var eightAm = moment().hour(8);
var nineAm = moment().hour(9);
var tenAm = moment().hour(10);
var elevenAm = moment().hour(11);
var twelvePm = moment().hour(12);
var onePm = moment().hour(13);
var twoPm = moment().hour(14);
var threePm = moment().hour(15);
var fourPm = moment().hour(16);
var fivePm = moment().hour(17);
var sixPm = moment().hour(18);
if (currentTime.isBetween(eightAm, tenAm)) {
    $("#nine").addClass("bg-danger");
    $("#ten").addClass("bg-success");
    $("#eleven").addClass("bg-success");
    $("#twelve").addClass("bg-success");
    $("#one").addClass("bg-success");
    $("#two").addClass("bg-success");
    $("#three").addClass("bg-success");
    $("#four").addClass("bg-success");
    $("#five").addClass("bg-success");
} else if (currentTime.isBetween(nineAm, elevenAm)) {
    $("#ten").addClass("bg-danger");
    $("#eleven").addClass("bg-success");
    $("#twelve").addClass("bg-success");
    $("#one").addClass("bg-success");
    $("#two").addClass("bg-success");
    $("#three").addClass("bg-success");
    $("#four").addClass("bg-success");
    $("#five").addClass("bg-success");
} else if (currentTime.isBetween(tenAm, twelvePm)) {
    $("#eleven").addClass("bg-danger");
    $("#twelve").addClass("bg-success");
    $("#one").addClass("bg-success");
    $("#two").addClass("bg-success");
    $("#three").addClass("bg-success");
    $("#four").addClass("bg-success");
    $("#five").addClass("bg-success");
} else if (currentTime.isBetween(elevenAm, onePm)) {
    $("#twelve").addClass("bg-danger");
    $("#one").addClass("bg-success");
    $("#two").addClass("bg-success");
    $("#three").addClass("bg-success");
    $("#four").addClass("bg-success");
    $("#five").addClass("bg-success");
} else if (currentTime.isBetween(twelvePm, twoPm)) {
    $("#one").addClass("bg-danger");
    $("#two").addClass("bg-success");
    $("#three").addClass("bg-success");
    $("#four").addClass("bg-success");
    $("#five").addClass("bg-success");
} else if (currentTime.isBetween(onePm, threePm)) {
    $("#two").addClass("bg-danger");
    $("#three").addClass("bg-success");
    $("#four").addClass("bg-success");
    $("#five").addClass("bg-success");
} else if (currentTime.isBetween(twoPm, fourPm)) {
    $("#three").addClass("bg-danger");
    $("#four").addClass("bg-success");
    $("#five").addClass("bg-success");
} else if (currentTime.isBetween(threePm, fivePm)) {
    $("#four").addClass("bg-danger");
    $("#five").addClass("bg-success");
} else if (currentTime.isBetween(fourPm, sixPm)) {
    $("#five").addClass("bg-danger");
};


// LOAD TASKS
$("#nine-text").text(nineEl);
$("#ten-text").text(tenEl);
$("#eleven-text").text(elevenEl);
$("#twelve-text").text(twelveEl);
$("#one-text").text(oneEl);
$("#two-text").text(twoEl);
$("#three-text").text(threeEl);
$("#four-text").text(fourEl);
$("#five-text").text(fiveEl);


// EDIT TASK WHEN CLICKED
$(".list-group").on("click", "p", function () {
    // create variable for text
    var text = $(this)
        .text()
        .trim();
    // create text area element
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text)
        .attr("id", "form");
    // change to text area when clicked
    $(this).replaceWith(textInput);
    // create text area focus
    textInput.trigger("focus");
    // exit out of form on blur

    // click save task icon
    $(".list-group").on("click", "span", function () {
        // get the textarea's current value/text
        var text = $(textInput)
            .val()
            .trim();
        var index = $(textInput)
            .closest(".list-group-item")
            .index();
        console.log("index number: " + index);
        // create new p element with new text
        var taskP = $("<p>").text(text);
        // send text to editedTask
        var editedTask = text;
        // replace text input with new p element
        $(textInput).replaceWith(taskP);
        taskArray.splice(index, 1, editedTask);
        console.log("task array: " + taskArray);
        localStorage.setItem("array", (taskArray));
    });
});