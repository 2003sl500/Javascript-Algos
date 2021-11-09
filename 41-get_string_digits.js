// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given
// "0s1a3y5w7h9a2t4?6!8?0"​, the function should return the number 1,357,924,680.
// Page 66, Get String Digits

function getStringDigits(str) {
    let newIntArray = "";
    for (let i = 0; i < str.length; i++) {
        if(!(i === 0 && str[0] == 0)){
            if (str[i] >= 0) {
                newIntArray += str[i];            }
        }
    }
    
    return parseInt(newIntArray).toLocaleString('en-US');
}

console.log(getStringDigits("0s1a3y5w7h9a2t4?6!8?0"));
