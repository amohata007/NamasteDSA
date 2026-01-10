const arr = [3,2,4,1,7,6];

function mergeSort(arr){
    if(arr.length==1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return mergeFun(left,right);
}

//Helper Function
function mergeFun(left,right){
    let l = left.length + right.length;
    let a = 0;
    let b = 0;
    let res = [];
    for(let i=0;i<l;i++){
        if(a<left.length && b<right.length){
            if(left[a]<right[b]){
                res.push(left[a]);
                a++;
            }else{
                res.push(right[b]);
                b++;
            }
        }
    }
    return [...res,...left.slice(a),...right.slice(b)];
    
}

console.log(mergeSort(arr));