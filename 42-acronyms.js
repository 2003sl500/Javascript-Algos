// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given
// "there's no free lunch - gotta pay yer way"​, return "TNFL-GPYW"​. Given "Live
// from New York, it's Saturday Night!"​, return "LFNYISN"​.
// Page 66, Acronyms

function acronymFunction(strAlpha){
    let code, codeNext, counter = 0;
    let acronym = [];
    
    for(let i = 0; i < strAlpha.length; i++){
        code = strAlpha.toLowerCase().charCodeAt(i);
        // console.log(code + ": " + alpha[i]);
        if(code >= 97 && code <= 122 && i === 0){
            acronym[0] = strAlpha[0];
            counter++;
        }
        if(code == 32){
            acronym[counter] = strAlpha[i + 1];
            counter++;
        }
    }
    
    let str = "";
    for(let i of acronym){
        str += i;
    }
    return str.toUpperCase();
}

let alpha = "Live from New York, it's Saturday Night!";
let alpha2 = "there's no free lunch - gotta pay yer way";
console.log(acronymFunction(alpha));
console.log(acronymFunction(alpha2));