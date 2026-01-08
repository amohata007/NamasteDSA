let arr = [0, 3, 5, 7, 9, 15];
let search = 15;

function binary(arr, search) {
    let left = 0;
    let right = arr.length - 1;

    while (right >= left) {
        let mid = Math.floor((left + right) / 2);
        if (search == arr[mid]) {
            return mid;
        }
        else if (search > arr[mid]) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}

console.log(binary(arr, search));