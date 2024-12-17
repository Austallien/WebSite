//
// ~/js/views/index.js
//

let globalSelector = "#global";

let ideSelector = "#ide"
let ideUrl = "core/view/partial/ide.html";

let generalSelector = "#general"
let generalUrl = "core/view/partial/general.html";

// TODO:
//      CHANGE TO *.load(ideUrl)
$(function () {
    $(globalSelector).load(ideUrl);
});