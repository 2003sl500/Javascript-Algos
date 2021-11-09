// Given an array, find and print its largest element
// page 34, Find and Print Max

let numArray = [3, 14, 7, 32, 8, 12, 82, 43, 7, 8];
let max = numArray[0];

for(let i = 1; i < numArray.length; i++){
    if(numArray[i] > max){
        max = numArray[i];
    }
}

console.log(max);