let nums = [0,1,0,3,12];

let init = 0;
for(let i=0;i<nums.length;i++){
    if(nums[i]!=0){
       nums[init] = nums[i];
       init++;
    }
}
for(let i = init;i<nums.length;i++){
    nums[i]=0;
}

console.log(nums);