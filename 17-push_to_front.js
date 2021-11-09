// Given an array and an additional value, insert this
// value at the beginning of the array. Do this
// without using any built-in array methods.
// Page 52, PushFront

function pushToFront(addNum){
    let ar = [3,91,-8,2,-18,30];
    
    for(let i = ar.length - 1; i >= 0; i--){

        ar[i + 1] = ar[i];
        if(i === 0){
            ar[0] = addNum;
        }

    }
    console.log(ar.toString());
}

pushToFront(73);