// Define a CustomerID alias for string.

// Create a Customer object alias with id: CustomerID, name: string, and optional email?: string.

// Implement a processOrder function type alias that accepts orderId: number and a callback (status: OrderStatus) => void.

// Use the Container<T> generic to wrap a Customer object.

// alias for customerid 
type customerid=string;
type Customer={
	id:customerid,
	name:string,
	email?:string
}
let customer1:Customer={
	id:"1",
	name:"supriya kumari"
}
type OrderStatus='pending'|'completed'|'failed';
type processOrder=(
	orderId:number,
	callback:(status:OrderStatus)=>
void
)=>void;

// type Container<T>={
// 	value:T
// }
let callback1=(status:string)=>{
    console.log(`this is outside callback function ${status}`);

}
const processOrder1:processOrder=(orderId:number,callback)=>{
	console.log(orderId);
	const status:OrderStatus="completed";
	callback(status);
}
processOrder1(3,(status)=>{
	console.log(status);
});
processOrder1(3, (status)=>callback1(status)
);
// use generic 
type Container<T>={
	value:T,
	timestamp: Date
}
let customerConatiner:Container<Customer>={
	value:customer1,
	timestamp:new Date()
}


	

