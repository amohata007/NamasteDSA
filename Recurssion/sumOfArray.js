let arr = [1,2,3,4,5];

function fun(n){
    if(n==0) return arr[n];
    return arr[n] + fun(n-1);
}

console.log(fun(arr.length-1))

//Sum of Odd Number
let arr2 = [2,1,2,3,4,5,6,7];

function fun2(n){
    if(n==0) return arr2[n]%2==0 ? 0 : arr2[n];
    if(arr2[n]%2!=0){
        return arr2[n] + fun2(n-1);
    }
    else{
        return fun2(n-1);
    }
    
}

console.log(fun2(arr2.length-1))

