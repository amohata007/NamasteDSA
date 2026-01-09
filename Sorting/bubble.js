let arr = [5,4,9,15,7,1,0];

function bubble(arr){
    for(let i=0;i<arr.length-1;i++){
        let swapped = false;
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr;
}

console.log(bubble(arr));