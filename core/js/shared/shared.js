
/**
 * @param {string} context Class or id selector or tag of content container.
 * @param {string} from Class or id selector or tag of element which will be removed.
 * @param {string} to Path to *.html file which content will be loaded.
 */
function swap(context, from, to) {
    $(context).empty();
    $(context).load(to);
}