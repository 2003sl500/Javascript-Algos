// Why stop with fibonacci? Create a function to
// retrieve a “tribonacci” number, from the sum of
// the previous 3. Tribonaccis are {0, 0, 1, 1, 2, 4, 7,
// 13, 24, 44, 81, ...}. Again, use a time-space
// tradeoff to make this fast.
// Page 57, Tricky Tribonacci

let tribonacciArray = [0,0,1];
function tribonacci(num){
    for(let i = 0; i < num; i++){
        if(num === 0){
            return 0;
        } else if(num === 1) {
            return 0;
        } else if(num === 2){
            return 1;
        } else {
            for(let i = 3; i <= num; i++){
                tribonacciArray.push(tribonacciArray[i - 3] + tribonacciArray[i - 2] + tribonacciArray[i - 1]);
            }
            return tribonacciArray;
        }
    }
}

function fasterTribonacci(num){
    if(num <= tribonacciArray.length){
        return tribonacciArray[num];
    } else {
        return tribonacci(num);
    }
}

console.log(fasterTribonacci(10));
console.log("");
console.log(fasterTribonacci(8));