
var globalSelector = "#global";

var ideSelector = "#ide"
var ideUrl = "core/view/partial/ide.html";

var generalSelector = "#general"
var generalUrl = "core/view/partial/general.html";

// TODO:
//      CHANGE TO *.load(ideUrl)
$(function () {
    $(globalSelector).load(ideUrl);
});