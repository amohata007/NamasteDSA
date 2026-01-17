// LC-1903
// Number(n) if more than 16 digits then fails-->
num = "42067";

function largestOdd(num){
    n = num.length-1;
    while(n>=0){
        if(Number(num[n])%2!==0){
            return num.substring(0,n+1);
        }
        n--;
    }
    return "";
}

console.log(largestOdd(num));
