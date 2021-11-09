// Create invertHash(assocArr) that converts a hash’s keys to values and values to corresponding keys.
// Example: given {"name": "Zaphod"; "numHeads": 2}​, return {"Zaphod": "name"; 2:
// "numHeads"}​. You will need to learn and use a JavaScript for ... in​ h​ere!
// Page 65, InvertHash

function invertHash(mapVar){
    let newMap = {};
    for(let x in mapVar){
        newMap[mapVar[x]] = x;
    }
    return newMap;
}

let hashMap = {"Acura": "Integra", "Audi": "A6", "BMW": "M3", "Chevrolet": "Corvette"};
console.log(invertHash(hashMap));