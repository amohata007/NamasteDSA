let arr = [7,15,1,5,3,6,4];

let min = arr[0];
let max_profit = 0;
let buy = 0;
let sell = 0;

function maxProfit(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
        }
        if(arr[i]-min> max_profit){
            max_profit = arr[i]-min;
            buy = min;
            sell = arr[i];
        }
    }
    return [max_profit, buy, sell];
}

console.log(maxProfit(arr));
