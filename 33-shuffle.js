// Recreate the shuffle()​built into JavaScript, to
// efficiently shuffle a given array’s values. Do you
// need to return anything from your function?
// Page 56, Shuffle

let sortedArray = [1,2,3,4,5,6,7,8,9];

function shuffleArray(arr){
    let randArrayIndex = [];
    for(let i = 0; i < arr.length; i++){
        let randIndex = Math.floor((Math.random() * arr.length));
        if(!randArrayIndex.includes(randIndex)){
            randArrayIndex.push(randIndex);
        } else {
            i--;
        }
    }

    for(let i = 0; i < arr.length; i++){
        randArrayIndex[i] = arr[randArrayIndex[i]];
    }

    return randArrayIndex;
}

console.log(shuffleArray(sortedArray));