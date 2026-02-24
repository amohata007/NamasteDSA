/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Double the array
var nextGreaterElements = function (nums) {
    let num = [...nums, ...nums];
    let stack = [num[num.length - 1]];
    let res = Array(num.length).fill(-1);

    for (let i = num.length - 2; i >= 0; i--) {
        while (stack.length) {
            if (num[i] >= stack[stack.length - 1]) {
                stack.pop();
            }
            else {
                res[i] = stack[stack.length - 1];
                break;
            }
        }
        stack.push(num[i]);
    }
    return res.slice(0, nums.length);

};

//Without double the array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (num) {
    let stack = [];
    let n = num.length;
    let res = Array(n).fill(-1);

    for (let i = 2 * n - 1; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (num[i % n] >= top) {
                stack.pop();
            } else {
                if (i < n) {
                    res[i] = top;
                }
                break;
            }
        }
        stack.push(num[i % n]);
    }
    return res;

};