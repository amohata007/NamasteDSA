/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
//O(n2)
//O(n)
var findThePrefixCommonArray = function(A, B) {
    let res = [];
    for(let i=1;i<=A.length;i++){
        let first = A.slice(0,i);
        let second = B.slice(0,i);
        let newArr = [...first,...second];
        let setMap = new Set(newArr);
        res.push(newArr.length - setMap.size)
    }
    return res;
};