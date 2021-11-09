//Given an array and an index into the array,
// remove and return the array value at that index.
// Do this without using any built-in array methods
// except pop()​. Think of PopFront(arr)​ as
// equivalent to RemoveAt(arr,0)
// Page 52, RemoveAt

function removeAt(removeIndex){
    let ar = [3,91,-8,2,-18,30];

    for(let i = 0; i < ar.length; i++){
        if(i >= removeIndex){
            ar[i] = ar[i + 1];
        }
    }

    // Remove the last index, which was empty
    ar.pop();

    console.log(ar.toString());

}

removeAt(5);