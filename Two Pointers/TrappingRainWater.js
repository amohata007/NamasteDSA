/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    let n = arr.length-1;
    let maxL = [arr[0]];
    let maxR = [];
    maxR[n] = arr[n]
    let res = 0;

    for(let i=1;i<arr.length;i++){
        maxL[i] = Math.max(maxL[i-1],arr[i]);
        maxR[n-i] = (Math.max(arr[n-i],maxR[n-i+1]));
    }
    
    for(let i=0;i<=n;i++){
        let waterTrapped = Math.min(maxL[i],maxR[i]) - arr[i];
        res += Math.max(waterTrapped,0);
    }

    return res;
}