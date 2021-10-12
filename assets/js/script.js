// VARIABLES
var taskArray = [
    "There are no current tasks for 9 am.",
    "There are no current tasks for 10 am.",
    "There are no current tasks for 11 am.",
    "There are no current tasks for 12 pm.",
    "There are no current tasks for 1 pm.",
    "There are no current tasks for 2 pm.",
    "There are no current tasks for 3 pm.",
    "There are no current tasks for 4 pm.",
    "There are no current tasks for 5 pm."
];
var nineEl = taskArray[0];
var tenEl = taskArray[1];
var elevenEl = taskArray[2];
var twelveEl = taskArray[3];
var oneEl = taskArray[4];
var twoEl = taskArray[5];
var threeEl = taskArray[6];
var fourEl = taskArray[7];
var fiveEl = taskArray[8];

// DISPLAY CURRENT DATE
var currentDate = moment().format("dddd, MMMM Do YYYY");
// add date to p element
var showDate = $("#currentDay").text(currentDate);

// TIME
var currentTime = moment().hour();
console.log(currentTime);

// LOAD TASKS


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
        console.log(index);
        // create new p element with new text
        var taskP = $("<p>").text(text);
        // send text to editedTask
        var editedTask = text;
        // replace text input with new p element
        $(textInput).replaceWith(taskP);
        taskArray.splice(index, 1, editedTask);
        console.log(taskArray);
        return;
        // add to array
        //taskArray.push(editedTask);
    });
});