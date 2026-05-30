/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let len = nums.length;
    let arr = [];
    for(let i=1;i<=len;i++){
        if(len%i==0){
            arr.push(i);
        }
    }
    console.log(arr)
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + (nums[arr[i]-1] * nums[arr[i]-1]);
    }
    return sum;
};