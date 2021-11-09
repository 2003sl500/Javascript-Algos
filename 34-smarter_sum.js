// Use a time-space tradeoff to accelerate the
// average running time of an iSigma(num) function
// that returns the sum of all positive integers from 1
// to num. Recall: sig(1) = 1, sig(2) = 3, sig(3) = 6,
// sig(4) = 10.
// Page 57, Smarter Sum

let sumArray = [];
function sigmaSum(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i; 
        sumArray.push(sum);
    }

    return sum;
}

function smarterSum(num){
    if(num <= sumArray.length){
        console.log("if statement");
        return sumArray[num - 1];
    } else {
      console.log("if else, sigmaSum()");
      return sigmaSum(num);
    }
}

console.log(smarterSum(5));
console.log(smarterSum(4));