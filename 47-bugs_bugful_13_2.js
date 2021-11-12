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
// start on page 74, with ReturnOddsArray1To255()