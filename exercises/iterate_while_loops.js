// @@@@@@ Iterate with JavaScript While Loops @@@@@@@

// Setup
let myArray = [];

// Only change code below this line
let i = 5;
while( i > -1) {
  myArray.push(i);
  i--;
}

console.log(myArray);

// @@@@@@ Iterate with JavaScript For Loops @@@@@@@

// Setup
let nextArray = [];

// Only change code below this line
for (let i = 1; i < 6; i++) {
  nextArray.push(i);
}
console.log(nextArray);

// @@@@@@ Iterate Odd Numbers With a For Loop @@@@@@@

// Setup
let thisArray = [];

// Only change code below this line
for(let i = 1; i < 10; i+=2) {
  thisArray.push(i);
}
console.log(thisArray);

// @@@@@@ Count Backwards With a For Loop @@@@@@@

// Setup
let thatArray = [];

// Only change code below this line
for(let i = 9; i > 0; i-=2) {
  thatArray.push(i);
}
console.log(thatArray);

// @@@@@@ Iterate Through an Array with a For Loop @@@@@@@

// Setup
let forArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for(let i = 0; i < forArr.length; i++) {
  total = total + forArr[i];
}
console.log(total);

// @@@@@@ Nesting For Loops @@@@@@@
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line


  for(let i = 0; i < arr.length; i++) {
    
    for(let x = 0; x <arr[i].length; x++) {
      product *= arr[i][x];
    }
  }

  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

// @@@@@@ Iterate with JavaScript Do...While Loops @@@@@@@
// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 11); 

// @@@@@@ Replace Loops using Recursion @@@@@@
// I found this one to be quite the challenge.

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {

    let sumIt = 0;

    console.log("### Arr[n-1] ###", arr[n-1]);
    sumIt = sumIt + arr[n-1];

    console.log("sumIt", sumIt);
    return sum(arr, n-1) + sumIt;

  }
  // Only change code above this line
}

console.log(sum([1], 0));
console.log(sum([2, 3 ,4], 1));
console.log(sum([2, 3, 4, 5, 7], 5));

// @@@@@@ Profile Lookup @@@@@@@

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line

    for(let i = 0; i < contacts.length; i++) {

        if (contacts[i].firstName === name) {
              
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            }
            else {
                return "No such property";
            }
        }
    }
    return "No such contact";
// Only change code above this line
}

console.log(lookUpProfile("Akira", "address"));

