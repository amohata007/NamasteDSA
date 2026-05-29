/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    if(n<=7){
        return (n*(n+1))/2;
    }
    let num = Math.floor(n/7);
    let rem = n%7;
    
    let sum = 0;
    for(let i=1;i<=num;i++){
        sum += 28;
        sum += (i - 1)*7;
    }
    for(let i=1;i<=rem;i++){
        sum += num+i;
    }
    return sum;
};