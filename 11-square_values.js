// Square each value in a given array, returning that same array with changed values
// Page 35, Square the Values

let ar = [3,91,8,2,18,30];

for(let i = 0; i < ar.length; i++){
    let temp = ar[i];
    ar[i] = temp * temp;
}

console.log(ar.toString());