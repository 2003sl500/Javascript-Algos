// Print all of the odd integers from 1 to 255
// Page 35, Print Odds 1-255

for (let index = 1; index <= 255; index = index + 2) {
    console.log(index);
}

// Alternate
for(let i = 0; i <= 255; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}