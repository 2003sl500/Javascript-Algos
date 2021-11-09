// Implement a function reverseString(str) that, given a string, will return the string of the same length but
// with characters reversed. Example: given "creature"​, return "erutaerc"​. Do not use the built-in
// reverse()​ function!
// Page 65, ReverseString

function reverseString(str){    
    let rs = "";
    for(let i = str.length - 1; i >= 0; i--){
        rs += str[i];
    }
    return rs;
}

console.log(reverseString("creature"));