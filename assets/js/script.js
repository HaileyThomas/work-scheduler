// display current date
// get date
var currentDate = moment().format("dddd, MMMM Do YYYY");
// add date to p element
var showDate = $("#currentDay").text(currentDate);


var editedTasks = JSON.parse(localStorage.getItem("tasks"));


// change task
$(".list-group").on("click", "p", function () {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    // change to text area when clicked
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    // save task
    $(".list-group").on("click", "span", function () {
        console.log("save button was clicked");
    });
});

// save tasks
var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};