// Create function ThreesFives()​ that adds each value from 100 and 4000000 (inclusive) if that value
// is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
// Page 39, Threes and Fives - first step.

function threeAndFives(numA, numB){
    let sum = 0;
    for(let i = numA; i <= numB; i++){
        if((i % 3 === 0 || i % 5 === 0)){
            if(i % 3 === 0 && i % 5 === 0){
            } else {
               sum += i;
            }
        }
    }
    console.log(sum);
}

threeAndFives(100, 4000000);