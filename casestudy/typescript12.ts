// Call displayMember for two members: one with email, one without.

// Use calculateFines to sum fines: 5, 10, 2.5.

// Compute a membership fee for $100 with default discount, then with 20%.

// Greet visitors “Alice” and “Bob” using both vipGreet and consoleGreet.

// Compute factorial(5).
function displayMember(id:number,name:string,email?:string):void{
	if(email){
 console.log(`given information about member is ${name} and ${email} and their id is ${id}`);
	}
	if(!email){
		console.log(`given information about member is ${name} and their id is ${id}`);
	}
	  

}
// function call
  displayMember(1,"supriya","supriyakumari7654@gmail.com");
	 displayMember(2,"Annu","");
	

// 2nd question
 let fines:number[]=[5,10,2.5];
 function calculateFines(fines:number[]):number{
	let sum=0;
	for(let c of fines){
		sum+=c;
	}
	console.log(`after summation given result is ${sum}`);
	return sum;
 }
 calculateFines(fines);

 function membership(fee:number,discount:number=0.2):number{
	  let  total= fee-fee*discount;
		console.log(`total fee after discount is ${total}`);
		return total;
 }
 membership(1000);
 membership(400,0.3);
 function greetvisitor(name :string):void{
	console.log(`welcome back ${name}`);
 }
 const vipgreet=(name:string)=>{
	return `welcome back vip ${name}`;
 }
 greetvisitor("Alice");
 greetvisitor("Bob");
 console.log(vipgreet("alice"));
 console.log(vipgreet("bob"));

 function factorial(num:number):number{
	  if(num<=1){
			return 1;

		}
		let totalval=num*factorial(num-1);
		
		return totalval;
 }
 factorial(6);
 factorial(8);