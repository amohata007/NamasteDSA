// let arr1 = [1, 2, 3, 0, 0, 0];
// let arr2 = [2, 5, 6];
// let m = 3;
// let n = 3;

// let arr1Copy = arr1.slice(0, m);
// let p1 = 0;
// let p2 = 0;

// for (let i = 0; i < m + n; i++) {
//     if ((arr1Copy[p1] < arr2[p2] && p1 < m) || p2 >= n) {
//         arr1[i] = arr1Copy[p1];
//         p1++;
//     }
//     else {
//         arr1[i] = arr2[p2]
//         p2++;
//     }
// }

// console.log(arr1)

//without extra space --
let arr1 = [1, 2, 3, 0, 0, 0];
let arr2 = [2, 5, 6];
let m = 3;
let n = 3;
let p1 = m-1;
let p2 = n-1;

for(let i=m+n-1;i>=0;i--){
    if(p2<0) break;
    if((arr1[p1]>arr2[p2] && p1>=0) ){
        arr1[i] = arr1[p1];
        p1--;
    }
    else{
        arr1[i] = arr2[p2];
        p2--;
    }
}
console.log(arr1);