// Given an array, index, and additional value, insert
// the value into the array at the given index. Do this
// without using built-in array methods. You can
// think of PushFront(arr,val)​ as equivalent to
//InsertAt(arr,0,val)​.
// Page 52, InsertAt

function insertAt(insertIndex , insertNum){
    let ar = [3,91,-8,2,-18,30];
    let temp = 0;

    temp = ar[insertIndex];
    ar[insertIndex] = insertNum;

    for(let i = ar.length - 1; i >= 0; i--){
    
        if(i > insertIndex){
            ar[i + 1] = ar[i];
        }
    }

    ar[insertIndex + 1] = temp;

    console.log(ar.toLocaleString());

}

insertAt(4, 5);