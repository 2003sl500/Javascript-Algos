// Create an array with all the odd integers between 1 and 255 (inclusive)
// page 34, Array with Odds

let numArray = [];

for(let i = 1; i <= 255; i += 2){
    numArray.push(i);
}

console.log(numArray.toLocaleString());
