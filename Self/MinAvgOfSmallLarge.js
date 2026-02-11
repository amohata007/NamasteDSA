/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let avg = 0;
    let smallest = Infinity;
    while(nums.length>0){
        nums = nums.sort((a,b)=>a-b);
        avg = (nums[0]+nums[nums.length-1])/2;
        if(avg<smallest){
            smallest = avg;
        }
        nums.pop();
        nums.shift();
        console.log(nums)
    }
    return smallest;
};