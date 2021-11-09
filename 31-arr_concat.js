// Replicate JavaScript’s concat()​. Create a
// standalone function that accepts two arrays.
// Return a new array containing the first array’s
// elements, followed by the second array’s
// elements. Do not alter the original arrays. Ex.:
// arrConcat( ['a','b'], [1,2] )​ should
// return ['a','b',1,2]​.
// Page 56, arrConcat

function arrConcat(iArr1, iArr2){
    let arrayConcat = [];

    for(let i = 0; i < iArr1.length; i++){
        arrayConcat.push(iArr1[i]);
    }

    for(let i = 0; i < iArr2.length; i++){
        arrayConcat.push(iArr2[i]);
    }
    return arrayConcat;
}

let arr1 = ['a','b','c','d','e'];
let arr2 = [6,7,8,9,10];
console.log(arrConcat(arr1, arr2).toString());