// Remember iFactorial from last chapter? Take
// that implementation and use a time-space
// tradeoff to accelerate the average running time.
// Recall that iFactorial(num) returns the product of
// positive integers from 1 to the given num. For
// example: fact(1)​ = 1, fact(2)​ = 2, fact(3)
// = 6. For these purposes, fact(0)​ = 1.
// Page 56, Faster Factorial

var sumArray = [];
let sum = 1;

function factorial(num){
    console.log("factorial() running");
    for(let i = 1; i <= num; i++){
        sum *= i;
        sumArray.push(sum);
    }
    return sum;
}

function fasterFactorial(num){
    console.log("fasterFactorial() running");
    if(num <= sumArray.length){
        console.log("Num is already in array");
        console.log(sumArray);
        return sumArray[num - 1];
    } else {
        return factorial(num);
    }
}

// The 1st fasterFactorial(5) loads the sumArray
console.log(fasterFactorial(5) + "\n");
console.log("this is between the fasterFactorials running\n");
// The 2nd fasterFactorial(3), if it is lower than the 1st fasterFactorial(),
// it looks up the value in the sumArray and returns that number, otherwise
// it runs the factorial() method.
console.log(fasterFactorial(3));