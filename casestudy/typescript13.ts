// describePerson

// Required: name: string

// Optional: age?: number

// Print "Name: <name>, Age: <age>" or "Name: <name>, Age: Unknown".

// calculatePrice

// Required: basePrice: number

// Default: discount: number = 0.1

// Return price after discount.


// solving first question
function describeperson(name:string,age?:number){
	     if(age){
				console.log(`name of person is ${name} and their age is ${age}`);
			 }
			 if(!age){
					console.log(`name of person is ${name} and their age is unknown`);
			 }
}
describeperson("supriya",21);
describeperson("harsh");
function calculatePrice(basePrice:number,discount:number=0.1):number{
	  return basePrice-basePrice*discount;
}
let total=calculatePrice(1000);
let withoutdefault=calculatePrice(1000,0.5);
console.log(`without default total price is ${total}`);
console.log(`with default total price is ${withoutdefault}`);