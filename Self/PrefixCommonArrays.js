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

//optimal
//O(n)
//O(n)
var findThePrefixCommonArray = function (A, B) {
    const seen = new Set();
    const res = [];
    let common = 0;

    for (let i = 0; i < A.length; i++) {
        if (seen.has(A[i])) common++;
        seen.add(A[i]);

        if (seen.has(B[i])) common++;
        seen.add(B[i]);

        res.push(common);
    }

    return res;
};
