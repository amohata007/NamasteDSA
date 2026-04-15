/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    return date
        .split("-")
        .map(x => Number(x).toString(2))
        .join("-");
};