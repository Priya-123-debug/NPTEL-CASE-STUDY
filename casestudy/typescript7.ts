// Define an enum Role for staff roles (Doctor, Nurse, Admin).

// Create an interface Staff with fields for id, name, and role.

// Create an array of staff members using the interface and enum.

// Write a function that prints a summary of all staff, showing their name and role.

enum Role {Doctor,Nurse,Admin}
interface Staff{
	  id:number;
		name:string,
		role:string
}
let staff:Staff[]=[
	{id:1,name:"Supriya",role:"software eng"},
	{id:2,name:"Annu",role:"developer"},
	 { id: 1, name: "Supriya", role: "Doctor" },
  { id: 2, name: "Annu", role:" Nurse" },
  { id: 3, name: "Ravi", role:" Admin" }
]
function print():void{
	    for(let c of staff){
				     console.log(`Name: ${c.name}, Role: ${c.role}`);
			}
}
print();