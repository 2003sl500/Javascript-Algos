// Strings like "Able was I, ere I saw
// Elba"​ or "Madam, I'm Adam"​ could be
// considered palindromes, because (if we ignore
// spaces, punctuation and capitalization) the letters
// are the same from front and back.
// Create a function that returns a boolean whether
// the string is a strict palindrome. For "a x a"​ or
// "racecar"​, return true​. Do not​ ignore spaces,
// punctuation and capitalization: if given "Dud"​ or
// "oho!"​, return false​.
// Page 68, Is Palindrome

function isStrictPalindrome(str){
    let tempArray = [];
    
    for(let i = 0; i < Math.floor(str.length / 2); i++){
        // console.log(str.charCodeAt(i) + " : " + str.charCodeAt(str.length - (i + 1)));
        if(str.charCodeAt(i) === str.charCodeAt(str.length - (i + 1))){
            tempArray.push(true);
        } else {
            tempArray.push(false);
        }
    }

    if(tempArray.includes(false)){
        return false;
    } else {
        return true;
    }
}

// Refactored
function isStrictPalindrome2(str){
    for(let i = 0; i < Math.floor(str.length / 2); i++){
        // console.log(str.charCodeAt(i) + " : " + str.charCodeAt(str.length - (i + 1)));
        if(!(str.charCodeAt(i) === str.charCodeAt(str.length - (i + 1)))){
            return false;
        }
    }
    return true;
}

let str = "Able was I ere I saw Elba"; // has some uppercase, otherwise true
let str2 = "Able wa I ere I saw lba"; // not true, missing letters
let str3 = "able was I ere I saw elba"; // all lowercase, true

// console.log("isPalindrome: " + isPalindrome(str));
// console.log("isStrictPalindrome: " + isStrictPalindrome(str));
// console.log("isStrictPalindrome: " + isStrictPalindrome(str2));
// console.log("isStrictPalindrome: " + isStrictPalindrome(str3));

console.log("isStrictPalindrome: " + isStrictPalindrome2(str));
console.log("isStrictPalindrome: " + isStrictPalindrome2(str2));
console.log("isStrictPalindrome: " + isStrictPalindrome2(str3));