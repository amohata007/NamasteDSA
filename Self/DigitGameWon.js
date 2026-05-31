/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let singleNum = 0;
    let doubleNum = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<10){
            singleNum += nums[i];
        }
        else{
            doubleNum += nums[i];
        }
    }
    return singleNum===doubleNum ? false : true;
};