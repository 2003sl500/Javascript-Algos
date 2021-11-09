// Write a function factorial(num)​ that, given a
// umber, returns the product (multiplication) of all
// positive integers from 1 up to number (inclusive).
// For example, factorial(3)​ = 6 (or 1 * 2 * 3);
// factorial(5)​ = 120 (or 1 * 2 * 3 * 4 * 5).
// Page 38, Fundamentals, Factorial

function factorial(num){
    let sum = 1;
    for(let i = 1; i <= num; i++){
        sum *= i;
        console.log(sum);
    }
    return sum;
}

console.log(factorial(3));