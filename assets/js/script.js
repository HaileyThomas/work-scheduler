var editedTask;
var taskP;

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
    $("#nine-div").addClass("bg-danger");
    $("#ten-div").addClass("bg-success");
    $("#eleven-div").addClass("bg-success");
    $("#twelve-div").addClass("bg-success");
    $("#one-div").addClass("bg-success");
    $("#two-div").addClass("bg-success");
    $("#three-div").addClass("bg-success");
    $("#four-div").addClass("bg-success");
    $("#five-div").addClass("bg-success");
} else if (currentTime.isBetween(nineAm, elevenAm)) {
    $("#ten-div").addClass("bg-danger");
    $("#eleven-div").addClass("bg-success");
    $("#twelve-div").addClass("bg-success");
    $("#one-div").addClass("bg-success");
    $("#two-div").addClass("bg-success");
    $("#three-div").addClass("bg-success");
    $("#four-div").addClass("bg-success");
    $("#five-div").addClass("bg-success");
} else if (currentTime.isBetween(tenAm, twelvePm)) {
    $("#eleven-div").addClass("bg-danger");
    $("#twelve-div").addClass("bg-success");
    $("#one-div").addClass("bg-success");
    $("#two-div").addClass("bg-success");
    $("#three-div").addClass("bg-success");
    $("#four-div").addClass("bg-success");
    $("#five-div").addClass("bg-success");
} else if (currentTime.isBetween(elevenAm, onePm)) {
    $("#twelve-div").addClass("bg-danger");
    $("#one-div").addClass("bg-success");
    $("#two-div").addClass("bg-success");
    $("#three-div").addClass("bg-success");
    $("#four-div").addClass("bg-success");
    $("#five-div").addClass("bg-success");
} else if (currentTime.isBetween(twelvePm, twoPm)) {
    $("#one-div").addClass("bg-danger");
    $("#two-div").addClass("bg-success");
    $("#three-div").addClass("bg-success");
    $("#four-div").addClass("bg-success");
    $("#five-div").addClass("bg-success");
} else if (currentTime.isBetween(onePm, threePm)) {
    $("#two-div").addClass("bg-danger");
    $("#three-div").addClass("bg-success");
    $("#four-div").addClass("bg-success");
    $("#five-div").addClass("bg-success");
} else if (currentTime.isBetween(twoPm, fourPm)) {
    $("#three-div").addClass("bg-danger");
    $("#four-div").addClass("bg-success");
    $("#five-div").addClass("bg-success");
} else if (currentTime.isBetween(threePm, fivePm)) {
    $("#four-div").addClass("bg-danger");
    $("#five-div").addClass("bg-success");
} else if (currentTime.isBetween(fourPm, sixPm)) {
    $("#five-div").addClass("bg-danger");
};

// LOAD TASKS FUNCTION
var loadTasks = function () {
    if ("nine" in localStorage) {
        $("#nine-text").text(localStorage.getItem("nine"));
    } else {
        $("#nine-text").text("There are currently no tasks.");
    };
    if ("ten" in localStorage) {
        $("#ten-text").text(localStorage.getItem("ten"));
    } else {
        $("#ten-text").text("There are currently no tasks.");
    };
    if ("eleven" in localStorage) {
        $("#eleven-text").text(localStorage.getItem("eleven"));
    } else {
        $("#eleven-text").text("There are currently no tasks.");
    };
    if ("twelve" in localStorage) {
        $("#twelve-text").text(localStorage.getItem("twelve"));
    } else {
        $("#twelve-text").text("There are currently no tasks.");
    };
    if ("one" in localStorage) {
        $("#one-text").text(localStorage.getItem("one"));
    } else {
        $("#one-text").text("There are currently no tasks.");
    };
    if ("two" in localStorage) {
        $("#two-text").text(localStorage.getItem("two"));
    } else {
        $("#two-text").text("There are currently no tasks.");
    };
    if ("three" in localStorage) {
        $("#three-text").text(localStorage.getItem("three"));
    } else {
        $("#three-text").text("There are currently no tasks.");
    };
    if ("four" in localStorage) {
        $("#four-text").text(localStorage.getItem("four"));
    } else {
        $("#four-text").text("There are currently no tasks.");
    };
    if ("five" in localStorage) {
        $("#five-text").text(localStorage.getItem("five"));
    } else {
        $("#five-text").text("There are currently no tasks.");
    };

};

// CALL LOAD TASKS FUNCTION
loadTasks();

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
        var index = $(this)
            .parent()
            .attr("id");
        console.log(text);
        console.log(index);
        console.log("index number: " + index);
        // create new p element with new text
        taskP = $("<p>").text(text);
        // replace text input with new p element
        $(textInput).replaceWith(taskP);
        console.log("taskP: " + taskP);
        console.log("text: " + text);
        editedTask = text;
        console.log("editedTask: " + editedTask);
        localStorage.setItem(index, text);
    });
});


