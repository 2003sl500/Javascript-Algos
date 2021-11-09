// Use a time-space tradeoff to accelerate the
// average running time of an iFibonacci(num)
// function that returns the ‘num’th number in the
// Fibonacci sequence. Recall: fib(0) = 0, fib(1) = 1,
// fib(2) = 1, fib(3) = 2.
// Page 57, Fabulous Fibonacci

let fibNum = [0,1];
function fibonacci(num){
    if(num === 0){
        return 0;
    } else if(num === 1 ){
        return 1;
    }
    for(let i = 2; i <= num; i++){
        fibNum[i] = fibNum[i - 2] + fibNum[i - 1];
    }
    return fibNum[fibNum.length - 1];
}

function fasterFibonacci(num){
    if(num <= fibNum.length){
        return fibNum[num];
    } else {
        return fibonacci(num);
    }
}

console.log(fasterFibonacci(11));
console.log("");
console.log(fasterFibonacci(10));