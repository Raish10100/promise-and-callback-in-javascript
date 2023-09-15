/*Write a function  "manipulateString" that takes in a string and converts the characters to uppercase letters . The function should return
a callback function "logString" that logs the sentence "The manipulated string is." along with the manipulated string or the new string to te console. */

function manipulateString(inputString){
    const uppercaseString = inputString.toUpperCase();

    function logString(){
        console.log(`The  manipulated string is : ${uppercaseString}`);
    }

    return logString
}

const input = 'Hello , world!';
const logFunction = manipulateString(input);
logFunction()