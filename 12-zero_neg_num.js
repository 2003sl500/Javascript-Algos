// Return the given array, after setting any negative values to zero
// Page 35, Zero Out Negative Numbers

let ar = [3,91,-8,2,-18,30];

for(let i = 0; i < ar.length; i++){
    if(ar[i] < 0){
        ar[i] = 0;
    }
}

console.log(ar.toString());