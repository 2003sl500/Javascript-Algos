// Given an array, print the max, min and average values for that array
// Page 34, Max, Min, Average

let numArray = [12, 14, 6, 32, 8, 12, 82, 43, 7, 8];

let min = numArray[0];
let max = numArray[0];
let sum = 0;
let avg;

for(let i = 0; i < numArray.length; i++){
    if(numArray[i + 1] > max){
        max = numArray[i + 1];
    }
    if (numArray[i + 1] < min){
        min = numArray[i + 1];
    }
    sum += numArray[i];

}

avg = sum / numArray.length;

console.log("Max: " + max);
console.log("Min: " + min);
console.log("average: " + avg);