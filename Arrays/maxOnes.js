let arr = [1,1,1,1,0,1,1,1];
let count = 0;
let maxNum = 0;

function maxOnes(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==1){
            count++;
        }
        if(maxNum<count){
            maxNum = count;
        }
        if(arr[i]==0){
            count = 0;
        }
    }
    return maxNum;
}

console.log(maxOnes(arr));