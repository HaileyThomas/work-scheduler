// DISPLAY CURRENT DATE
// get date
var currentDate = moment().format("dddd, MMMM Do YYYY");
// add date to p element
var showDate = $("#currentDay").text(currentDate);

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
    // click save task icon
    $(".list-group").on("click", "span", function () {
        // get the textarea's current value/text
        var text = $(textInput)
            .val()
            .trim();
        // create new p element with new text
        var taskP = $("<p>").text(text);
        // send text to editedTask
        var editedTask = text;
        // replace text input with new p element
        $(textInput).replaceWith(taskP);
        // check current div and save
        var checkDiv = taskP.parent();
        if (checkDiv.is("#nine")) {
            localStorage.setItem("nine", JSON.stringify(editedTask));
        };
        if (checkDiv.is("#ten")) {
            localStorage.setItem("ten", JSON.stringify(editedTask));
        };
        if (checkDiv.is("#eleven")) {
            localStorage.setItem("eleven", JSON.stringify(editedTask));
        };
        if (checkDiv.is("#twelve")) {
            localStorage.setItem("twelve", JSON.stringify(editedTask));
        };
        if (checkDiv.is("#one")) {
            localStorage.setItem("one", JSON.stringify(editedTask));
        };
        if (checkDiv.is("#two")) {
            localStorage.setItem("two", JSON.stringify(editedTask));
        };
        if (checkDiv.is("#three")) {
            localStorage.setItem("three", JSON.stringify(editedTask));
        };
        if (checkDiv.is("#four")) {
            localStorage.setItem("four", JSON.stringify(editedTask));
        };
        if (checkDiv.is("#five")) {
            localStorage.setItem("five", JSON.stringify(editedTask));
        };
    });
});