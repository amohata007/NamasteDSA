/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let count = 0;
    let prod = 1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            count++;
        }
        else{
            prod*=nums[i];
        }
        
    }
    for(let i=0;i<nums.length;i++){
        if(count>=2){
            nums[i]=0
        }
        else if(count==1){
            if(nums[i]==0){
                nums[i] = prod;
            }
            else{
                nums[i]=0;
            }
        }
        else{
            nums[i]=prod/nums[i]
        }
    }
    return nums;
};

//[1,2,3,4]
//another
var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n);

    // Step 1: prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }

    // Step 2: suffix products
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= suffix;
        suffix *= nums[i];
    }

    return res;
};
