// let num = 1230;
// let flag = 0;
// function reverseNumber(num){
//     if(num<0){
//         flag = 1;
//         num = -num;
//     }
//     let rev = 0;
//     while(num>0){
//         let rem = num%10;
//         rev = (rev*10) + rem;
//         num = Math.floor(num/10);
//     }
//      return flag==0 ? rev : -rev;
// }

// console.log(reverseNumber(num));

//Check Constraints
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let temp = x;
    temp = Math.abs(temp);
    let rev = 0;

    while(temp>0){
        let rem = temp%10;
        rev = (rev*10) + rem;
        temp = Math.floor(temp/10);
    }

    let digit = Math.pow(2,31);
    if(rev>digit || rev<-digit) return 0;

    return x<0 ? -rev : rev;
};