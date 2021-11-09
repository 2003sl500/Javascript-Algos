// Implement a function sigma(num)​ that, given a
// number, returns the sum of all positive integers
// from 1 up to number (inclusive). Ex.: sigma(3)
// = 6 (or 1+2+3); sigma(5)​ = 15 (or 1+2+3+4+5).
// Page 38, Fundamentals, Sigma

function sigma(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
        console.log(sum);
    }
    return sum;
}

console.log(sigma(5));