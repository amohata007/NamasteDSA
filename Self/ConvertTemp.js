/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let res = [];
    res.push(celsius+273.15);
    res.push((celsius*1.80)+32.00);
    return res;
};