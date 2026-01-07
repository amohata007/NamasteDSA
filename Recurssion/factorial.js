let num = 5;

function fun(num){
    if(num==1) return 1;
    return num*fun(num-1);
}

console.log(fun(num));