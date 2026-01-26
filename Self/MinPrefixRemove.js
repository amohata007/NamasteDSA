//LC-3818
//O(n)
//O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPrefixLength = function(nums) {
    let min = 0;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i+1]<=nums[i]){
            min = i+1;
        }
    }
    return min;
};