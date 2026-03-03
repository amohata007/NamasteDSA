let arr = [-1,0,1,2,2,-1,-4,1,2];

//LC-15
//O(n2)
//O(n)

function threeSum(arr){
    arr.sort((a,b)=>a-b);
    let res = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=arr[i-1]){
            twoSum(arr,i,res);
        }
       
    }
    return res;
}

function twoSum(arr,x,res){
    let i =x+1;
    let j = arr.length-1;

    while(i<j){
        let sum = arr[i]+arr[j]+arr[x];
        if(sum>0){
            --j;
        }
        else if(sum<0){
            ++i;
        }
        else{
            res.push([arr[i],arr[j],arr[x]]);
            ++i;
            --j;
            while(i<j && arr[i]==arr[i-1]){
                ++i;
            }
        }
    }
}

console.log(threeSum(arr));