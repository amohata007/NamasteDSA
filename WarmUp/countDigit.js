function countDig(num){
    if(num==0) return 1;
    if(num<0){
        num = Math.abs(num)
    }
    let count =0;
    while(num>0){
        num = Math.floor(num/10);
        count++;
    }
    return count;
}

let num = -10;

console.log(countDig(num));