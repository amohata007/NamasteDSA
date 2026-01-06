let arr = ["h","e","l","l","o","H"];

function revString(arr){
    for(let i=0;i<arr.length/2;i++){
        [arr[i],arr[arr.length-1-i]]=[arr[arr.length-1-i], arr[i]]
    }
    return arr;
}

console.log(revString(arr));