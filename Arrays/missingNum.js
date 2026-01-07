let arr = [3,0,1,2];

let sum = ((arr.length)*(arr.length+1))/2;

function missingNum(arr){
    for(let i=0;i<arr.length;i++){
        sum = sum - arr[i];
    }
    return sum;
}

console.log(missingNum(arr));