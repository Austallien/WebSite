let terminalCaretSelector = "#terminalCaret";

$(terminalCaretSelector).on("keydown", function(event) {
    if (event.key === "Enter")
        swap(globalSelector, ideSelector, generalUrl);
    else
        event.preventDefault();
});