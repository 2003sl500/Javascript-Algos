// Given an array, return the Nth-largest element:
// there should be (N - 1) elements that are larger.
// Page 55, Nth-Largest

let arr = [3,28,9,43,8,1];
let max = arr[0];
let secondMax = arr[0];
let nth = 2;

let sortedArr = arr.sort(function(a,b){return a-b});

console.log("1st Sorted: " + sortedArr);
console.log("1st nth largest: " + sortedArr[sortedArr.length - nth]);

// Alternate method
/// ... (spread operator performs shallow copy)
let sortedArr2nd = [...arr];
let temp;
// Sorts the array
for(let i = 0; i < sortedArr2nd.length; i++){
   if(sortedArr2nd[i] > sortedArr2nd[i + 1]){
       temp = sortedArr2nd[i];
       sortedArr2nd[i] = sortedArr2nd[i + 1];
       sortedArr2nd[i + 1] = temp;
   }
}

console.log("2nd Sorted: " + sortedArr2nd);
// Grabs the nth index. Largest is the last
console.log("2nd nth largest: " + sortedArr2nd[sortedArr2nd.length - nth]);
