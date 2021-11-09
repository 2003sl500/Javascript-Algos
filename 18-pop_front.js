// Given an array, remove and return the value at
// the beginning of the array. Do this without using
// any built-in array methods except pop()​.
// Page 52, PopFront

function popFromFront(){
    let ar = [3,91,-8,2,-18,30];
    let poppedNum = 0;

    for(let i = 0; i < ar.length; i++){
        if(i === 0){
            ar[ar.length] = ar[0];
        }
        ar[i] = ar[i + 1];
    }
    
    // the first ar.pop() removes the empty index
    ar.pop();
    poppedNum = ar.pop();
    
    console.log("Removed number from front: " + poppedNum);
    console.log(ar.toLocaleString());
}

popFromFront();