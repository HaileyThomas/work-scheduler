// VARIABLES
var taskArray = [];
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
        // add to array
        taskArray.push(editedTask);
    });
});