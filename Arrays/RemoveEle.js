let arr = [0,1,2,2,3,0,4,2];
let val = 2;

let init = 0;
function removeEle(arr, val){
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=val){
            arr[init] = arr[i];
            init++;
        }
    }
    return init;
}

console.log(removeEle(arr, val));