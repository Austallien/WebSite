
let generalContentSelector = "#general-content"

let aboutSelector = "#about";
let aboutUrl = "core/view/partial/about.html";

let projectsSelector = "#projects";
let projectsUrl = "core/view/partial/projects.html";

let navigationLinkSelector = ".navigation-link";

let currentElementSelector = aboutSelector;



$(function () {
    $(generalContentSelector).load(aboutUrl);
});


$(navigationLinkSelector).on("click", function () {
    let url = `core/view/partial/${this.value}.html`;

    $(generalContentSelector).load(url);
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