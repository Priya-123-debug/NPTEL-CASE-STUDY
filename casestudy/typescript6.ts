// Create a function processTransaction that takes an amount (number), a description (string), and a flag isCredit (boolean).

// If the amount is negative, the function should throw an error (never).

// If the description is missing, use undefined and handle it in the function.

// Print a summary of the transaction.

function processTransaction(amount:number,description:string|undefined,isCredit:boolean):void{
	 function fail():never{
			throw new Error ("this will never run");

	 }
	  if(amount<0){
			fail();
		
		}
	   const t=isCredit?"credit":"debit";
		function printing():void{
			console.log(`the amount is ${amount} && description about amount is ${description}`);
		}
		printing();


}
processTransaction(123,"the 123 amount is transfered from bank",true);
processTransaction(423,"",true);
