// You will be given a numerical array that has first
// been sorted, then rotated by an unknown
// amount. Find and return the minimum value in
// that array.
// Page 54, Min Of Sorted-Rotated

function minOfSortedRotated(arr){
    let minVal = arr[0];
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(minVal > arr[i]){
            minVal = arr[i];
            count++;
        // else if, does not let it continue through the rest of the arr,
        // once it finds a lower value. Because it is sorted, we do not need to continue.    
        } else if(count > 0){
            // console.log("minVal: " + minVal);
            return minVal;
        }
    }
}

let arr = [8,10,2,4,5,7];
console.log("Min Val: " + minOfSortedRotated(arr));