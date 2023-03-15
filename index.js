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

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

// and operator &&
function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
      return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
testLogicalAnd(10);

// or operator
function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
testLogicalOr(15);

// else if
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
    return "Between 5 and 10"; 
    }
  }
  
testElseIf(7);

function testSize(num) {
    // Only change code below this line
    if (num < 5) {
      return "Tiny";
    } else if (num < 10) {
      return "Small";
    } else if (num < 15) {
      return "Medium";
    } else if (num < 20) {
      return "Large";
    } else if (num >= 20) {
      return "Huge";
    }
  
    return "Change Me";
    // Only change code above this line
  }
  
testSize(7);

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  }
  else if (strokes <= par - 2) {
    return names[1];
  }
  else if (strokes == par - 1) {
    return names[2];
  }
  else if (strokes == par) {
    return names[3];
  }
  else if (strokes == par + 1) {
    return names[4];
  }
  else if (strokes == par + 2) {
    return names[5];
  }
  else if (strokes >= par + 3) {
    return names[6];
  }
  // Only change code above this line
}

golfScore(5, 4);

// Switch and case
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }


  // Only change code above this line
  return answer;
}

caseInSwitch(1);


// Case switch default option 
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

// Multiple case options
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

// Another switch case chain
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

// Return with boolean
function isLess(a, b) {
  // Only change code below this line
    return a < b
  // Only change code above this line
}

isLess(10, 15);

// Return undefined
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

// Case and if examples
let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
  }

  if (count > 0) {
    return (count + " Bet")
  } else {
    return (count + " Hold")
  }
  return ;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// objects
const myDog = {
  // Only change code below this line
  "name": "Elvis",
  "legs": 4,
  "tails": 1,
  "friends": ["Vini", "Mil", "Soc", "Lin"]
  // Only change code above this line
};

// Accessing objects properties
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

// Object access using brackets
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

// object propertie access using variables
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

// object propertie update
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";

// add new properties object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof"

// delete object properties
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails

// dictionary
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line

  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }

  // Only change code above this line
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");

// check if object has propertie with hasOwnProperty
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found"
  }
  // Only change code above this line
}

// dict example
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }];


// accessing object nested elements
const myStorage = {
   "car": {
     "inside": {
       "glove box": "maps",
       "passenger seat": "crumbs"
      },
     "outside": {
       "trunk": "jack"
     }
   }
 };
  
const gloveBoxContents = myStorage.car.inside["glove box"];

// add accessing nestng arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// dict exercise
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// while loop
// Setup
const myArray = [];

let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}
// Only change code below this line

// for loop
// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}

// for with 2 increment
// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}