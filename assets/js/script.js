// display current date
// get date
var currentDate = moment().format("dddd, MMMM Do YYYY");
// add date to p element
var showDate = $("#currentDay").text(currentDate);

var tasks = [];
var taskLi = $("<li>");

// load tasks
// load tasks function
var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
};

// change task
$(".list-group").on("click", "p", function () {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text)
        .attr("id", "form");
    // change to text area when clicked
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    // save task
    $(".list-group").on("click", "span", function () {
        // get the textarea's current value/text
        var text = $(textInput)
            .val()
            .trim();
        var taskP = $("<p>").text(text);
        $(textInput).replaceWith(taskP);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log("save button was clicked");
        console.log(tasks);
    });
});

// save tasks
var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};