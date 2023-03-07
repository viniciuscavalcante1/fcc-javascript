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

// array push() method -> insert elements in the end of array
brothers.push(["Vi", 40])
console.log("Brothers array with last push: " + brothers)

// array pop() method -> remove last element and return it
console.log("myArray before pop method: " + myArray);
myArrayRemoved = myArray.pop()
console.log("myArray after pop method: " + myArray);
console.log("Pop element: " + myArrayRemoved);

// array shift() method -> same as pop, but with the first element
myArray.push('1');
console.log('myArray after new push:' + myArray);
myArrayShiftRemoved = myArray.shift();
console.log('myArray after shift method: ' + myArray);
console.log("Element removed with shift: " + myArrayShiftRemoved);

// array unshift() method -> same as push, but with the first element
myArray.push(2);
myArray.push(3);
console.log("New myArray after new pushes: " + myArray);
myArray.shift();
console.log("myArray after shift: " + myArray);
myArray.unshift(0);
console.log("myArray after unshift value 0: " + myArray);

// More multi-dimensional arrays:
const myList = [["Pão", 5], ["Batata", 6], ["Ketchup", 1], ["Pilha", 1], ["Água com gás", 8]];

// functions
function functionName() {
    console.log("Hello, World! This is being printed out by a function!");
}

// function call
functionName();

// function parameters are placeholders, while arguments are the values 
// that will serve as input for these placeholders

function sumWithArguments(num1, num2) {
    console.log(num1 + num2);
}

console.log('Function with arguments:');
sumWithArguments(1,2);

// return

function plusUltra(num) {
    return num * 100000000000000000000;
}

// if
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
  
  
    // Only change code above this line
  
  }

// strict equality comparision
// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

// inequality
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

// strict inequality
// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

// greater than
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);