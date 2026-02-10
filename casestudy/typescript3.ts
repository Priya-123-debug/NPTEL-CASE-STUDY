// Declare a variable called city and assign it your favorite city as a string.

// Declare a variable called temperature with type number and assign it a value.

// Create a variable called isRaining and let TypeScript infer its type from the value you assign.

// Write a function called weatherReport that takes city, temperature, and isRaining as parameters and prints a message like:
// "In <city>, it is <temperature>°C. Is it raining? <true/false>"

// Try calling the function with your variables.
var city:string="patna";
// 2nd question
var temperature:number=38;
// 3rd question 
var isRaining=true;

// 4th question
function weatherReport( city:string, temperature:number, isRaining:boolean):void{
 console.log(`In ${city}, it is ${temperature}°C.Is it raning? ${isRaining}`);
}

// now calling function
weatherReport(city,temperature,isRaining);

