/**
 * @param {number[]} prices
 * @return {number[]}
 */
//Brute force
//O(n2)
var finalPrices = function(prices) {
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            if(prices[j]<=prices[i]){
                prices[i] = prices[i]-prices[j];
                break;
            }
        }
    }
    return prices;
};

//optimal
//using stack
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let stack = [];
    
    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
            let index = stack.pop();
            prices[index] -= prices[i];
        }
        stack.push(i);
    }
    
    return prices;
};

