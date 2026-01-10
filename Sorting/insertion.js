const arr = [3,2,4,1,7,6];

for(let i=1;i<arr.length;i++){
    curr = arr[i];
    prev = i-1;
    while(arr[prev]>curr){
        arr[prev+1] = arr[prev];
        prev--;
    }
    arr[prev+1]=curr;
}

console.log(arr);