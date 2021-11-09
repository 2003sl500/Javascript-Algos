// Replace any negative array values with 'Dojo'​
// Page 34, Swap String For Array Negative Values

let numArray = [3, 9, -4, -7, 7, 12];

for(let i = 0; i < numArray.length; i++){
    if(numArray[i] < 0){
        // console.log("Dojo");
        numArray[i] = "Dojo";
    } else {
        // console.log(numArray[i]);
    }
}

console.log(numArray.toLocaleString());