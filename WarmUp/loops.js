//Searches an element in array and return it's index if not then -1 

let arr  = [2,4,2,1,6,8,5];

function searchElement(arr,k){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==k){
            return i;
        }
    }
    return -1;
}

console.log(searchElement(arr,2))

//Note - if last occ then reverse the loop.

// 2 - Return negative numbers in array

let arr2  = [2,-4,2,-1,-6,8,5];

function searchElement(arr){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count++;
        }
    }
    return count;
}

console.log(searchElement(arr2))

// 3 - Largest in the array 
let arr3 = [3,2,7,14,9,3,1];

function largestEle(arr3){
    let max = arr3[0];
    for(let i =1; i<arr3.length;i++){
        if(arr3[i]>max){
            max = arr3[i];
        }
    }
    return max;
}

console.log(largestEle(arr3));