// Create a variable for your favorite fruit and print it.

// Write a function that takes a number and prints double its value.

// Add a single-line and a multi-line comment to your code.

// Define a class called Person with a method sayHello that prints a greeting.
let favfruit:string="apple";
console.log(`my favorite fruit is ${favfruit}.`);

// 2nd question 
function printing(value:number):void{
	console.log(`double of ${value} is ${value*2}`);
}
printing(5);
class Person{
	sayHello():void{
		console.log("hello my name is supriya .how are you?");
	}
}
let person1=new Person();
person1.sayHello();