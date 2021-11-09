// Create a function that, given a string, returns the string, without blanks. Given " play that
// Funky Music "​, returns a string containing "playthatFunkyMusic"​.
// Page 66, Remove Blanks

function removeBlanks(str){
    let newString = "";
    let counter = 0;
    
    for(let i = 0; i < str.length; i++){
        if(str[i] !== " "){
            newString += str[i];
        }
    }
    
    return newString;
}

console.log(removeBlanks("This is nice to have"));