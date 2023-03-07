// const is a constant, which is always good to uppercase it.

const FIRSTNAME = "Vinícius";
const LASTNAME = "Cavalcante";

console.log("My full name is " + FIRSTNAME + " " + LASTNAME + ".");

let firstLetterFirstName = "";

// Javascript follows zero-based indexing, which means the first index number is 0.
firstLetterFirstName = FIRSTNAME[0];
console.log("The first letter of my first name is " + firstLetterFirstName + ".");

let lastLetterFirstName = "";
lastLetterFirstName = FIRSTNAME[FIRSTNAME.length - 1];
console.log("The last letter of my first name is " + lastLetterFirstName + ".");

// Javascript arrays are similar to Python's.
const myArray = ["String", 1];
console.log("Array: " + myArray);

// Multi-dimensional arrays:
const brothers = [["Vini", 24], ["Bru", 32]];
console.log("Multi-dimensional array: " + brothers);

// Array bracket is similar to strings
let firstBrother = brothers[0]
console.log("First brother, using array bracket in a multi-dimensional array: " + firstBrother);
let ageFirstBrother = brothers[0][1]
console.log("Age of the first brother, using multi-dimensional array brackets: " + ageFirstBrother);

// Arrays are mutable (even CONST)
myArray[0] = "String updated";
console.log(myArray)
