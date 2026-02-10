// Create a function recordAnswer that takes a question ID and an answer of any type, and stores it in an object.

// Add at least three answers: a string, a number, and an array.

// Print all recorded answers.
class obj{
	questionid:string="";
	answer:any
 recordAnswer(questionid:string,answer:any){
		  this.questionid=questionid,
			this.answer=answer
	}
}
let newobj=new obj();
newobj.recordAnswer("123",2);
console.log(newobj.questionid);
console.log(newobj.answer);
