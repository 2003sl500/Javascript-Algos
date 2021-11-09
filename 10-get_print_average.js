// Analyze an array’s values and print the average
// Page 35, Get and Print Average

let ar = [3,91,8,2,18,30];
let sum = 0;
let avg = 0;

for(let i = 0; i < ar.length; i++){
    sum += ar[i];
}

avg = sum / ar.length;
console.log("Average: " + avg)