let arr = [2,4,1,0,6,3];
let search = 6;

function Linear(arr,search){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==search){
            return i;
        }
    }
    return -1;
}

console.log(Linear(arr,search))