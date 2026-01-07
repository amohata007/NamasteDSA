let num = 5;

function sumRecusrion(num){
    if(num==0) return 0;
    return num + sumRecusrion(num-1);
}

console.log(sumRecusrion(num));