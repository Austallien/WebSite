
var generalContentSelector = "#general-content"

var aboutUrl = "core/view/partial/about.html";

var navigationLinkSelector = ".navigation-link";
var closeSelector = ".close";

$(function () {
    $(generalContentSelector).load(aboutUrl);
});


$(navigationLinkSelector).on("click", function () {
    let url = `core/view/partial/${this.value}.html`;

    $(generalContentSelector).load(url);
});

$(closeSelector).on("click", function (event) {
    $(globalSelector).load(ideUrl, function () {
        $(function () {
            $(terminalCaretSelector).trigger("focus");
        })
    });
});

/*
document.querySelectorAll(".navigation-link").forEach(item => item.addEventListener('click', function () {
    if (currentElementId == this.value)
        return;

    let element_from = document.getElementById(currentElementId);
    let element_to = document.getElementById(this.value);

    // Function defined in ~/js/views/index.js
    swap(element_from, element_to);
    currentElementId = this.value;
}, false));
*/