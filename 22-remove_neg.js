// Implement a function removeNegatives()​ that
// accepts an array and removes any values that
// are less than zero.
// Page 53, Remove Negatives

function removeNeg(arr){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
}

removeNeg([3,91,-8,2,-18,30,-20]);