let nums = [1, 2, 2, 1, 1, 0]

for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
        nums[i] *= 2;
        nums[i + 1] = 0;
    }
}

//[ 1, 4, 0, 2, 0, 0 ]

let init = 0;

for(let i=0;i<nums.length;i++){ 
    if(nums[i]!==0){
        nums[init] = nums[i];
        init++;
    }
}   

for(let i=init;i<nums.length;i++){
    nums[i]=0;
}

console.log(nums);
