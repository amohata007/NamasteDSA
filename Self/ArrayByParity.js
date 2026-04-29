/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            res.push(0);
        }
        else {
            res.push(1);
        }
    }
    return res.sort()
};