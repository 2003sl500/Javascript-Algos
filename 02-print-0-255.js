// Print integers from 0 - 255, and with each integer print the sum so far
// page 34, Print Sum 0-255

let sum = 0;
for(let i = 0; i <= 255; i++){
    sum += i;
    console.log("int: " + i + " sum: " + sum)
}