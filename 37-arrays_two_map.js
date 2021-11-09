// Given two arrays, create an associative array (map) containing keys of the first, and values of the
// second. For arr1 = ["abc", 3, "yo"]​ and arr2 = [42, "wassup", true]​, return {"abc":
// 42, 3: "wassup", "yo": true}​.
// Page 64, Arrs2Map

let newAssociativeArray = {};
function associativeArrays(key, value){
    for(let i = 0; i < key.length; i++){
        newAssociativeArray[key[i]] = value[i];
    }
    return newAssociativeArray;
}

let arr1 = ["abc", 3, "yo"];
let arr2 = [42, "wassup", true];
console.log(associativeArrays(arr1, arr2));
console.log(newAssociativeArray["abc"]);
console.log(newAssociativeArray[3]);