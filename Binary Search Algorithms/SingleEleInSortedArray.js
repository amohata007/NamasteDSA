/**
 * @param {number[]} nums
 * @return {number}
 */
//540
//O(logn)
var singleNonDuplicate = function(nums) {
    //O(n)
    //Using XOR
//     let result = 0;
//     for (const num of nums) {
//   result ^= num;
// }
// return result

//Using BS
    let left = 0;
    let right = nums.length-1;

    while(left<=right){
        let mid = left + Math.floor((right-left)/2);

        if(nums[mid]==nums[mid+1]){
            if((mid-left)%2==0){
                left = mid+2;
            }
            else{
                right = mid-1;
            }
        }
        else if(nums[mid]==nums[mid-1]){
            if((right-mid)%2==0){
                right = mid-2;
            }
            else{
                left = mid+1;
            }
        }
        else{
            return nums[mid];
        }
    }
};