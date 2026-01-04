let arr = [7,3];

function secondLargestNumber(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest = largest;
            largest = arr[i];
        }
        if(arr[i]>secondLargest && arr[i]!=largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondLargestNumber(arr));

//Corner Case
// - less than 2 elements
// - Duplicates
// - Negative numbers
// - All Uniques