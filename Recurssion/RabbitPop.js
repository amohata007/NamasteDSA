//To calculate at Nth month how many rabbits are there
let num = 3;

function rabbit(num){
    if(num==0) return 2;
    return 2*rabbit(num-1);
}

console.log(rabbit(num));

//To calculate at Nth month total--
function totalRabbits(months) {
    if (months === 0) return 2;
    return Math.pow(2, months + 1) + totalRabbits(months - 1);
}
console.log(totalRabbits(3));

//If initial 1 rabbit
function totalRabbits2(months) {
    if (months === 0) return 1;
    return Math.pow(2, months) + totalRabbits2(months - 1);
}
console.log(totalRabbits2(3));