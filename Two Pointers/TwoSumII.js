numbers = [2,7,11,15]
target = 9
// Output: [1,2]
//LC-167

//Must use only constant extra space
//So can't use map here
//Arr is sorted - so two pointers

function twoSum(numbers,target){
    let i=0;
    let j=numbers.length-1;

    while(i<j){
        if(numbers[i]+numbers[j]>target){
            --j;
        }
        else if(numbers[i]+numbers[j]<target){
            ++i;
        }
        else{
            return [i+1,j+1];
        }
    }
}

console.log(twoSum(numbers,target));