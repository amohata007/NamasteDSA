/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let rev = 0;
    let temp = n;
    while(n>0){
        let rem = n%10;
        rev = rev*10 + rem;
        n = Math.floor(n/10);
    }
    return Math.abs(temp-rev);
};