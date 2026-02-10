// Declare a variable score with let and assign it a number.

// Inside a block (e.g., an if statement), declare another score variable with a different value and print it.

// Declare a constant COUNTRY and assign it your favorite country.

// Try to change the value of COUNTRY and observe what happens.

// Try to re-declare score in the same block and see the result.
let score=23;
if(true){
	let score=50;
	 
	console.log(`this is local scope of score ${score}`);
	score=100;
		console.log(`this is redeclare  score ${score}`);

};
const country="INDIA";
// country="usa"; it cause error because it canot be redclare


