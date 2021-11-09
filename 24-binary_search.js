// Given a sorted array and a value, return whether
// that value is present in the array. Do not
// sequentially iterate the entire array. Instead,
// ‘divide and conquer’, taking advantage of the fact
// that the array is sorted
// Page 54, Binary Search


// This is not complete, only divides one time, needs to divide every time.
function binarySearch(arr, searchValue){
    let index = Math.floor((arr.length - 1) / 2);
    let tf = false;
    while(!tf){
        if(searchValue < arr[index] && index >= 0){
            index--;
            
        } else if(searchValue > arr[index] && index <= arr.length - 1){
            index++;
            
        } else {
            console.log("equal: " + index);
            tf = true;
            return true;
        }
        if(index <= 0 || index >= arr.length - 1){
            return false;
            tf = true;
        }
    }
}

let binSearchArray = [2,4,5,7,8,10];
console.log(binarySearch(binSearchArray, 4));