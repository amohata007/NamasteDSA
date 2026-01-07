let num = 5;

function fun(num){
    if(num==0) return; //Base Case
    console.log(num);
    fun(num-1); // Recursive Case
}

fun(num);

//Ascending Order
let num2 = 5;

function fun2(x){
    if(x>num2) return;
    console.log(x);
    fun2(x+1);
}

fun2(1);