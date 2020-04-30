//  -------------- Cloning an array  --------------

const foo = ["1", "2", "3"];

// Copy the array in a new variable
let bar = [...foo];
// Push new item to new array
let bar.push("4");

console.log(foo);
// ["1", "2", "3"];

console.log(bar);
// ["1", "2", "3", "4"];



// --------------  Async Function --------------

function fooAfterTwoSeconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await fooAfterTwoSeconds();
  console.log(result);
  // expected output: 'resolved'
}

asyncCall();


// --------------  Mapping specific properties --------------

var ratings = watchList.map(movie => ({
  title: movie["Title"],
  rating: movie["imdbRating"]

}));


// --------------  Filtering specific properties (only higher than... etc) --------------


let filteredList = watchList.filter(value => {
  console.log(value.Title);
  if (value.imdbRating > 8) {
    return true;
    // Returns all values rated higher than 8
  } else {
    return false;
  }
});

// ------------------ Filter & Map together ---------------- 
let filteredList = watchList.filter(value => {
  console.log(value.Title);
  if (value.imdbRating > 8) {
    return true;
  } else {
    return false;
  }
}).map(value => ({
  title: value["Title"],
  rating: value["imdbRating"]
}));

// ---------------- Filter & Map & Reduce ------------------

watchList
    // Use filter to find films directed by Christopher Nolan
    .filter(film => film.Director === "Christopher Nolan")
    // Use map to convert their ratings from strings to numbers
    .map(film => Number(film.imdbRating))
    // Use reduce to add together their ratings
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
  // Divide by the number of Nolan films to get the average rating
  watchList.filter(film => film.Director === "Christopher Nolan").length;
  // Add your code above this line
  

// ----------------- Concat & Push ------------------

// Concat doesnt cause mutating side effects. Push does.
var first = [1, 2, 3];
var second = [4, 5];

first.concat(second);
// [1, 2, 3, 4, 5]
first.push(second);
// [1, 2, 3, [4, 5]]


// ---------------- Defining & Extending Classes -------------

class Square {

	// these are the parameters.
	constructor(height, width) {

		this.height = height;
		this.width = width;
	}
	// This is a Getter
	get squareGetter() {
		return squareMethod();
	}
	// This is where you put the Method.

	squareMethod() {
		return this.height * this.width
	}
}

class Rectangle extends Square {
	constructor(height) {

		// Super is called to get the value from the parent class
		super(height);
		this.width = height * 2;

	}
}

new Square(5,5);
// Square {height: 5, width: 5}

new Rectangle(5);
// Rectangle {height: 5, width: 10}


// --------- Higher order function -----------------

// A function that returns a function, or takes a function as argument

// Closure & Higher Order Function
function multiplier(factor) {
	return x => x * factor;
	
}
let doubler = multiplier(2);
// doubler(4) = 8

// ----------- Put related vars into an object! ----------

//  Helps with structure of code.

// from
const width = 100;
const height = 50;
let color = grey;

// to 
const circle = {
	width: 100,
	height: 100,
	color: grey
}

// use dot syntax to get the values.
circle.width;
circle.height;
circle.color;
