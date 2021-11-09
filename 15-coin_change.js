// Implement generateCoinChange(cents)​ that accepts a parameter for the number of cents, and
// computes how to represent that amount with the smallest number of coins. Console.log the result.
// Page 40, Generate Coin Change

function generateCoinChange(cents){
    let quarters = 0, dimes = 0, nickels = 0;
    
    console.log("Original Cents: " + cents);

    if(cents % 25 === 0){
        quarters = cents / 25;
        cents -= quarters * 25;
    } else {
        quarters = Math.floor(cents / 25);
        cents -= quarters * 25;
    }

    if(cents % 10 === 0){
        dimes = cents / 10;
        cents -= dimes * 10;
    } else {
        dimes = Math.floor(cents / 10);
        cents -= dimes * 10;
    }

    if(cents % 5 === 0){
        nickels = cents / 5;
        cents -= nickels * 5;
    } else {
        nickels = Math.floor(cents / 5);
        cents -= nickels * 5;
    }

    console.log("Quarters: " + quarters);
    console.log("Dimes: " + dimes);
    console.log("Nickels: " + nickels);
    console.log("Pennies: " + cents);
}

generateCoinChange(94);