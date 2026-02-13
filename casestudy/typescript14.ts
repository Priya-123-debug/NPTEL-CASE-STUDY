// Write a generic class FeedbackBox<T> that stores feedback items of any type and lets you retrieve them all.

// Write a generic function getFirstItem<T> that returns the first item from any array.

class FeedbackBox<T>{
	private feedbacks:T[]=[];
	addFeedback(feedback:T){
		this.feedbacks.push(feedback);
	}
	getfeedback():T[]{
		return [...this.feedbacks];
	}
}
function getFirstItem<T>(items: T[]): T | undefined {
    return items[0]; 
}
const stringBox = new FeedbackBox<string>();
stringBox.addFeedback("Awesome!");
stringBox.addFeedback("Could improve.");

console.log("All feedbacks:", stringBox.getfeedback());
console.log("First feedback:", getFirstItem(stringBox.getfeedback()));

const numberBox = new FeedbackBox<number>();
numberBox.addFeedback(100);
numberBox.addFeedback(200);

console.log("All number feedbacks:", numberBox.getfeedback());
console.log("First number feedback:", getFirstItem(numberBox.getfeedback()));




