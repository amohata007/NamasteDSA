let arr = [5,4,9,15,7,1,0,3];

// function selection(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=arr.length-1;j>i;j--){
//             if(arr[j]<arr[i]){
//                 [arr[j],arr[i]] = [arr[i],arr[j]]
//             }
//         }
//     }
//     return arr;
// }

function selection(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}


console.log(selection(arr));