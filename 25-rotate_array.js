// Implement rotateArr(arr, shiftBy)​ that
// accepts array and offset. Shift arr’s values to the
// right by that amount. ‘Wrap-around’ any values
// that shift off array’s end to the other side, so that
// no data is lost. Operate in-place: given
// ([1,2,3],1)​, change the array to [3,1,2]​.
// Page 54, Rotate Array

function rotateArr(arr, shiftBy){
    for(let i = 0; i < arr.length; i++){
        if(i < shiftBy){
            // unshift, adds to front
            // shift, removes from front
            arr.unshift(arr[arr.length - 1]);
            // push, adds to back
            // pop, removes from back
            arr.pop();
        }
    }
    console.log(arr);
}

let rotateArray = [1,2,3];
rotateArr(rotateArray, 1);