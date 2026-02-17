/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    // if(Math.abs(z-x) < Math.abs(z-y)) return 1;
    // if(Math.abs(z-x) > Math.abs(z-y)) return 2;
    // return 0;
    return Math.abs(z - x) < Math.abs(z - y) ? 1
         : Math.abs(z - x) > Math.abs(z - y) ? 2
         : 0;
};