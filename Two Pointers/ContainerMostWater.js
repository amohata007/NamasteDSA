let arr = [1,8,6,2,5,4,8,3,7];

let i = 0;
let j = arr.length-1;
let maxWater = 0;

while(i<j){
    let area = Math.min(arr[i],arr[j])*(j-i);
    maxWater = Math.max(area,maxWater);
    arr[i]>arr[j] ? j-- : i++;
}

console.log(maxWater);