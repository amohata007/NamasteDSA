/**
 * @param {number[]} nums
 * @return {number[]}
 */
//O(n)
//O(n)
var leftRightDifference = function(nums) {
    let leftSum = [0];
    let rightSum = [0];
    let ans = []

    for(let i=1;i<nums.length;i++){
        leftSum.push(nums[i-1]+leftSum[leftSum.length-1]);
    }

    for(let i=nums.length-1;i>0;i--){
        rightSum.unshift(nums[i]+rightSum[0]);
    }

    for(let i=0;i<nums.length;i++){
        ans.push(Math.abs(leftSum[i]-rightSum[i]))
    }
    return ans;
};

//optimised
//O(n)
//O(1)
var leftRightDifference = function(nums) {
    let totalSum = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i];
        ans.push(Math.abs(leftSum - rightSum));
        leftSum += nums[i];
    }

    return ans;
};