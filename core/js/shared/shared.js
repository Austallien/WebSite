/**
 * @param {string} context Class or id selector or tag of content container.
 * @param {string} from Class or id selector or tag of element which will be removed.
 * @param {string} to Path to *.html file which content will be loaded.
 */
function swap(context, from, to) {
    $(context).empty();
    $(context).load(to);
}

/**
 * Swap content in container with swooth opacity changing.
 *
 * @param {string} context Element which content is swapping.
 * @param {string} element_from Element which swapping from.
 * @param {string} element_to Element which swapping to.
 * @param {number} duration Duration of swapping in total.
 * @param {boolean} interruptOnOverlap Begin new fadeSwap immediately using elementTo of previous swapping as elementFrom or await ending of previous swapping if another fadeSwap called with same context.
 */

/*
function fadeSwap(context, element_from, element_to, duration, interruptOnOverlap) {
    $.get(element_to, function (content) {
        $(element_from).append(content);

    let stepInterval = duration / 2 / 10;
    let step = 0.1
    let fromOpacity = 1;
    let toOpacity = 0;

    element_from.style.opacity = fromOpacity;
    element_to.style.opacity = toOpacity;;

    let timer = setInterval(function () {
        if (fromOpacity > 0) {
            if (fromOpacity <= 0.1) {
                element_from.style.display = "none";
                fromOpacity = 0;
                element_from.style.opacity = fromOpacity;
                element_to.style.display = "";
                return;
            }
            fromOpacity -= step;
            element_from.style.opacity = fromOpacity;
        } else {
            if (toOpacity >= 0.9) {
                element_to.style.display = "";
                element_to.style.opacity = 1;
                clearInterval(timer);
                return;
            }
            toOpacity += step;
            element_to.style.opacity = toOpacity;
        }
    }, stepInterval);
    }, "html");
}
*/