let num = 6;

function fib(num){
    if(num<=1) return num;
    return fib(num-1) + fib(num-2);
}

console.log(fib(num));

// [0,1,1,2,3,5,8,13....]