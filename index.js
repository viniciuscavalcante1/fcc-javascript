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
