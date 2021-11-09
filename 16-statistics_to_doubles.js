// Implement a ‘die’ that randomly returns an
// integer between 1 and 6 inclusive. Roll a pair of
// these dice, tracking the statistics until doubles
// are rolled. Display the number of rolls, min, max,
// and average.
// Page 41, Statistics to Doubles

function diceRoll(){
    let diceA = 0, diceB = 0;

    let numRolls = 0, min = 0, max = 0, avg = 0, sum = 0;
    let rolls = [];
    let tempRolls = [];
    let tf = true;

    while(tf){
        numRolls++;
        diceA = Math.ceil(Math.random() * 6);
        diceB = Math.ceil(Math.random() * 6);

        rolls.push(diceA + diceB);
        tempRolls.push(diceA);
        tempRolls.push(diceB);
        

        if(min === 0){
            min = diceA + diceB;
        } else if((diceA + diceB) < min){
            min = diceA + diceB;
        }

        if((diceA + diceB) > max){
            max = diceA + diceB;
        }

        if(diceA === diceB){
            tf = false;
            console.log("doubles rolled: " + diceA);
        }
    }

    for(let i = 0; i < rolls.length; i++){
        sum += rolls[i];
    }  

    avg = Math.floor(sum / rolls.length);

    console.log("Pair of dice sums: " + rolls.toLocaleString());
    console.log("All dice numbers: " + tempRolls.toLocaleString())
    console.log("Number of rolls: " + numRolls);
    console.log("Sum: " + sum);
    console.log("Min: " + min);
    console.log("Max: " + max);
    console.log("Avg: " + avg);

}

diceRoll();