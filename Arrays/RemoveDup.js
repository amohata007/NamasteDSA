let arr = [0,1,1,2,2,3,4,4,4,4,5,5];
let arr2 = [0,1,1,2,2,3,4,4,4,4,5,5];

//op  = [1,2,3,4,5,.....];

let init = 0;

function remDup(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[init]){
            init++;
            arr[init] = arr[i];
            
        }
    }
    return arr;
}

console.log(remDup(arr));

//Just unique
let res = [...new Set(arr2)];
console.log(res);