// Given an array, move all values forward by one index, dropping the first and leaving a '0'​ value at the end
// Page 35, Shift Array Values

let ar = [3,91,-8,2,-18,30];

for(let i = 0; i < ar.length; i++){
    ar[i] = ar[i + 1];
}

ar[ar.length - 1] = 0;

console.log(ar);