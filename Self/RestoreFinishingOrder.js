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