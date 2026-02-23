/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
//O(n)
//O(n)
var dailyTemperatures = function(arr) {
    let stack = [arr.length-1];
    let res = Array(arr.length).fill(0);

    for(let i=arr.length-2;i>=0;i--){
        while(stack.length){
            if(arr[i]>=arr[stack[stack.length-1]]){
                stack.pop();
            }
            else{
                res[i] = stack[stack.length-1] - i;
                break;
            }
        }
        stack.push(i);
    }
    return res;
};