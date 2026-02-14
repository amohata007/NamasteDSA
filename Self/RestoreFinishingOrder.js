/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
//O(n*m)
//O(1)
var recoverOrder = function(order, friends) {
    let res = [];
    for(let i=0;i<order.length;i++){
        if(friends.includes(order[i])){
            res.push(order[i]);
        }
    }
    return res;
};

//Optimised using Set
//O(n+m)
//O(m)

/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let res = [];
    let friendSet = new Set(friends);

    for(let i of order){
        if(friendSet.has(i)){
            res.push(i)
        }
    }
    return res;
};