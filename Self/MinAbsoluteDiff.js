// LC - 1200
// time- O(nlogn)
// space - O(n)

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr = arr.sort((a,b)=>a-b);
    let res= [];
    let min = Infinity;
    for(let i=0;i<arr.length-1;i++){
        if(Math.abs(arr[i+1]-arr[i])<min){
            res = [];
            res.push([arr[i],arr[i+1]]);
            min = Math.abs(arr[i+1]-arr[i]);
        }
        else if(Math.abs(arr[i+1]-arr[i])==min){
            res.push([arr[i],arr[i+1]]);
        }
    }
    return res;
};