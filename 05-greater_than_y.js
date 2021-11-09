// Given an array and a value Y, count and print the number of array values greater than Y
// Page 34, Greater Than Y

let numArray = [3, 8, 9, 13, 7, 3, 73, 9, 10];
let y = 12;
let count = 0;

for(let i = 0; i < numArray.length; i++){
    if(y < numArray[i]){
        count++;
        console.log("Count: " + count + " Num: " + numArray[i] + " is greater than " + y);
    }
}