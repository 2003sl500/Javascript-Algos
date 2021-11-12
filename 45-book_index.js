// Write a function that given a sorted array of page
// numbers, return a string representing a book
// index. Combine consecutive pages to create
// ranges. Given [1, 3, 4, 5, 7, 8, 10]​,
// return the string "1, 3-5, 7-8, 10"​.
// Page 69, Book Index

let bookIndex = (arr) => {
    let temp = [];
    let str = "";
    for(let i = 0; i < arr.length - 1; i++){
        if((arr[i] + 1) === arr[i + 1]){
            temp.push(arr[i]);
            if((arr[i + 2]) !== arr[i + 1] + 1){
                temp.push(arr[i + 1]);
            }
        } else {
            if(temp.length > 1){
                str += temp[0] + "-" + temp[temp.length - 1] + ", ";
            } else {
                str += arr[i] + ", ";
            }
            temp = [];
        }
        
    }
    str += arr[arr.length - 1];

    return str;
}

let arr1 = [1,3,4,5,7,8,9,10,15,16,17,30];
let arr2 = [1, 3, 4, 5, 7, 8, 10];
console.log(bookIndex(arr2));