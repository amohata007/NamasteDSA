nums = [5,7,7,8,8,10];
target = 8;
//op [3,4]

function FirstLast(nums,target){
    let res = [-1,-1];
    let left = 0;
    let right = nums.length-1;

    while(left<right){
        let mid = left + Math.floor((right-left)/2);
        if(nums[mid]<target){
            left = mid+1;
        }
        else{
            right = mid
        }
    }
    if(target == nums[left]){
        res[0] = left;
    }

    left = 0;
    right = nums.length-1;

    while(left<right){
        let mid = left + Math.ceil((right-left)/2);
        if(nums[mid]>target){
            right = mid-1;
        }
        else{
            left = mid
        }
    }
    if(target == nums[left]){
        res[1] = left;
    }

    return res;
}

console.log(FirstLast(nums,target));