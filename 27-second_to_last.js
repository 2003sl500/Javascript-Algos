// Return the second-to-last element of an array
// Page 55, Second-to-Last

let arr = [3,8,29,43,8,1];

console.log(arr[arr.length - 2]);

// Alternate method
for(let i = 0; i < arr.length; i++){
    if(i === arr.length - 2){
        console.log(arr[i]);
    }
}