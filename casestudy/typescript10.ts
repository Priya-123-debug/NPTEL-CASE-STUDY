// Implement four small functions to practice each decision-making construct:

// checkSign(num: number): void
// Use an if statement to log whether num is positive.

// evenOrOdd(num: number): void
// Use an if…else to log whether num is even or odd.

// getGrade(score: number): string
// Use an if…else if…else ladder to return a letter grade:

// score ≥90 → "A"

// score ≥80 → "B"

// score ≥70 → "C"

// score ≥60 → "D"

// otherwise "F"

// provideFeedback(grade: string): void
// Use a switch to log a feedback message for each grade ("A"… "F"), with a default for any unexpected value.

 function checkSum(number:number):void{
	if(number>0){
		console.log("numer is positive");

	}
	else{
		console.log("number is negative");
	}
}
 function evenOrOdd(number:number):void{
	if(number%2==0){
		console.log("numer is even");

	}
	else{
		console.log("number is odd");
	}
}
function getGrade(score:number):string{
	     if(score>=90){
         console.log("your grade is ");
				 return "A";
			 }
			else if(score>=80){
         console.log("your grade is ");
				 return "B";
			 }
			 else if(score>=70){
         console.log("your grade is ");
				 return "C";
			 }
			  else if(score>=60){
         console.log("your grade is ");
				 return "D";
			 }
			  else {
         console.log("your grade is ");
				 return "F";
			 }
}
function  provideFeedback(grade: string): void{
	switch (grade) {
    case "A":
      console.log("Feedback: Excellent performance!");
      break;
    case "B":
      console.log("Feedback: Great job! Keep it up.");
      break;
    case "C":
      console.log("Feedback: Good effort; aim higher next time.");
      break;
    case "D":
      console.log("Feedback: Needs improvement; review your work.");
      break;
    default:
      console.log("Feedback: Unsatisfactory; please seek help.");
      break;
  }

}
function finalevaulation(score:number):void{
	checkSum(score);
	evenOrOdd(score);
let grade=	getGrade(score);
	provideFeedback(grade);



}
finalevaulation(54);
