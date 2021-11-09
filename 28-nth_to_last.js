// Return the element that is N-from-array’s-end
// Page 55, Nth-to-Last

let arr = [3,8,29,43,8,1];
let nth = 3;

console.log(arr[arr.length - nth]);

// Alternate method
for(let i = 0; i < arr.length; i++){
    if(i === arr.length - nth){ 
        console.log(arr[i]);
    }
}