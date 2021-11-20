// find the bugs

// function print1to255() {
//     for (var num = 1; num <= 255; num--) {
//         console.log(num);
//     }
// }

function print1to255() {
    for (var num = 1; num <= 255; num++) {
        console.log(num);
    }
}

// print1to255();
//-------------------------------------------------------

// function printArrayMax(arr) {
//     if (arr.length == 0) {
//         console.log("[ ], no max val.");
//         return;
//     }
//     var max = arr[0];
//     for (var idx = 1; idx < arr.length; idx++) {
//         if (arr[idx] > max) {
//             max = arr[idx];
//         }
//         console.log("Max val:", max);
//     }
// }

function printArrayMax(arr) {
    if (arr.length == 0) {
        console.log("[ ], no max val.");
        return;
    }
    var max = arr[0];
    for (var idx = 1; idx < arr.length; idx++) {
        if (arr[idx] > max) {
            max = arr[idx];
        }
    }
    console.log("Max val:", max);
}

// printArrayMax([3,5,8,1,38,4,9]);
//------------------------------------------------------

// function printOdds1to255() {
//     var num = 1;
//     while (num <= 255) {
//     console.log(num);
//     num ++= 2;
//     }
// }

function printOdds1to255() {
    var num = 1;
    while (num <= 255) {
        console.log(num);
        num += 2;
    }
}

// printOdds1to255();
//------------------------------------------------------

// function printArrayValues(arr){
//     for(var idx=0; idx<arr.length;idx++) {
//         console.log("array[", idx,"] =", idx);
//     }
// }

function printArrayValues(arr) {
    for (var idx = 0; idx < arr.length; idx++) {
        console.log("array[", idx, "] =", arr[idx]);
    }
}

// printArrayValues([3,5,8,1,38,4,9]);
//------------------------------------------------------

// function printArrayAverage(arr) {
//     if (arr.length == 0) {
//         console.log("[ ], no avg val.");
//         return;
//     }
//     var sum = arr[0];
//     for (var idx = 0; idx < arr.length; idx++) {
//         sum += arr[idx];
//     }
//     console.log(sum / arr.length);
// }

function printArrayAverage(arr) {
    if (arr.length == 0) {
        console.log("[ ], no avg val.");
        return;
    }
    var sum = arr[0];
    for (var idx = 1; idx < arr.length; idx++) {
        sum += arr[idx];
    }
    console.log(sum / arr.length);
}

// printArrayAverage([3, 5, 8, 1, 38, 4, 9]);
//----------------------------------------------------------------------------

function oddArray1to255() {
    // create empty array
    let arr = [];
    // setup for loop, with max iterations
    for (let i = 1; i < 256; i = i + 2) {
        // add # to array
        arr.push(i);
    }
    // return array
    return arr;
}

// console.log(oddArray1to255().toString());
//-----------------------------------------------------------------------------

// function numGreaterThanY(arr, y) {
//     var numGreater = 0;
//     for (var idx = 0; idx < arr.length; idx++) {
//         if (arr[idx] > y) {
//             y++;
//         }
//     }
//     console.log("%d values greater than %d", numGreater, y);
// }

function numGreaterThanY(arr, y) {
    var numGreater = 0;
    for (var idx = 0; idx < arr.length; idx++) {
        if (arr[idx] > y) {
            numGreater++;
        }
    }
    console.log("%d values greater than %d", numGreater, y);
}

// numGreaterThanY([1,4,3,8,9,2,83,12], 6);
//-----------------------------------------------------------------------------

// function maxMinAverage(arr) {
//     if (arr.length == 0) {
//         console.log("[] arr, no min/max/avg");
//         return;
//     }
//     var min = arr[0];
//     var max = arr[0];
//     var sum = arr[0];
//     for (var idx = 1; idx <= arr.length; idx++) {
//         if (arr[idx] < min) {
//             min = arr[idx];
//         }
//         if (arr[idx] > max) {
//             max = arr[idx];
//         }
//         sum += arr[idx];
//     }
//     console.log("Max val:", max);
//     console.log("Min val:", min);
//     console.log("Avg val:", sum / arr.length);
//     return [max, min, avg];
// }

function maxMinAverage(arr) {
    if (arr.length == 0) {
        console.log("[] arr, no min/max/avg");
        return;
    }
    var min = arr[0];
    var max = arr[0];
    var sum = arr[0];
    for (var idx = 1; idx < arr.length; idx++) {
        if (arr[idx] < min) {
            min = arr[idx];
        }
        if (arr[idx] > max) {
            max = arr[idx];
        }
        sum += arr[idx];
    }

    var avg = sum / arr.length;

    console.log("Max val:", max);
    console.log("Min val:", min);
    console.log("Avg val:", sum / arr.length);

    return [max, min, avg];
}

// console.log(maxMinAverage([1,4,3,8,9,2,83,12]).toString());
//-----------------------------------------------------------------------------

// function squareArrVals(arr) {
//     for (idx = 0; idx < arr.length; idx++) {
//         arr[idx] = arr[idx * idx];
//     }
// }

function squareArrVals(arr) {
    for (idx = 0; idx < arr.length; idx++) {
        arr[idx] = arr[idx] * arr[idx];
    }
    return arr;
}

// console.log(squareArrVals([2, 1, 3, 5, 8, 10]));
//-----------------------------------------------------------------------------

// function setNegsToZero(arr) {
//     for (var idx = 1; idx < arr.length; idx++) {
//         if (arr[idx] < 0) {
//             arr[idx] = 0;
//         }
//     }
// }

function setNegsToZero(arr) {
    for (var idx = 1; idx < arr.length; idx++) {
        if (arr[idx] < 0) {
            arr[idx] = 0;
        }
    }
    return arr;
}

// console.log(setNegsToZero([2, 1, -3, 5, -8, 10]));
//-----------------------------------------------------------------------------

// function arrShift(arr) {
//     for (var idx = 1; idx < arr.length; idx++) {
//         arr[idx + 1] = arr[idx];
//     }
//     arr[arr.length - 1] = 0;
//     return arr;
// }

function arrShift(arr) {
    for (var idx = 0; idx < arr.length; idx++) {
        console.log(idx);
        arr[idx] = arr[idx + 1];
    }
    arr[arr.length - 1] = 0;
    return arr;
}

// console.log(arrShift([2, 1, -3, 5, -8, 10]));
//-----------------------------------------------------------------------------

// No errors
function subStringForNegs(arr) {
    for (var idx = 0; idx < arr.length; idx++) {
        if (arr[idx] <= 0) {
            arr[idx] = "Dojo";
        }
    }
    return arr;
}

console.log(subStringForNegs([2, 1, -3, 5, -8, 10]));