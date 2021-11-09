// Given a numerical array, reverse the order of the
// values. The reversed array should have the same
// length, with existing elements moved to other
// indices so that the order of elements is reversed.
// Page 53, Reverse Array

let ar = [3,91,-8,2,-18,30];
let reverseArray = [];
let index = 0;

for(let i = ar.length - 1; i >= 0; i--){
    reverseArray[index] = ar[i];
    index++;
}

console.log(reverseArray.toLocaleString());

// Alternate way to reverse
let ar2 = [3,91,-8,2,-18,30, 21];
let temp = 0;

for(let i = 0; i < (ar2.length / 2); i++){
    temp = ar2[i];
    ar2[i] = ar2[ar2.length - (i + 1)];
    ar2[ar2.length - (i + 1)] = temp;
}

console.log(ar2.toLocaleString());
