let num = 1230;
let flag = 0;
function reverseNumber(num){
    if(num<0){
        flag = 1;
        num = -num;
    }
    let rev = 0;
    while(num>0){
        let rem = num%10;
        rev = (rev*10) + rem;
        num = Math.floor(num/10);
    }
     return flag==0 ? rev : -rev;
}

console.log(reverseNumber(num));