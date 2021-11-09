// Return the second-largest element of an array.
// Page 55, Second-Largest

let arr = [3,28,9,43,8,1];
let max = arr[0];
let secondMax = arr[0];

for(let i = 0; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}

for(let i = 0; i < arr.length; i++){
    if(secondMax < arr[i] && max !== arr[i]){
        secondMax = arr[i];
    }
}

console.log("Max: " + max);
console.log("2nd largest: " + secondMax);