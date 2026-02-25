/**
 * @param {number} x
 * @return {number}
 */
//O(logn)
//LC-69
var mySqrt = function(x) {
    if(x<2) return x;
    let left = 2;
    let right = Math.floor(x/2);

    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(mid**2==x){
            return mid;
        }
        else if(mid**2>x){
            right = mid-1;
        }
        else{
            left = mid+1;
        }
        // if(left==right){
        //     return left;
        // }
    }
    return right;
};