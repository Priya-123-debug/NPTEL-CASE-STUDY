// Define a type Profile with username (string), bio (string or null), and optional avatarUrl (string).

// Create two profiles: one with a null bio and no avatar, and one with both fields set.

// Write a function showProfile that prints the username, a default message if bio is null, and a default avatar if avatarUrl is undefined.

type Profile={
	username:string,
	bio:null|string,
	avatarUrl?:string
}
let Profile1:Profile={
	username:"Supriya",
	bio:"i am lazy person",
	avatarUrl:""
}
let Profile2:Profile={
	username:"Annu",
	bio:null,
	avatarUrl:"active girl"
}
function showProfile(user:Profile):void{
	let username=user.username
	let bio=user.bio==null?"bio is not provided":`given bio is ${user.bio}`
	let avatarUrl=user.avatarUrl==null?"avatar is not provided":`given avatar is ${user.avatarUrl}`
	console.log(`username is ${username} and  bio of user is ${bio} and avartarurl of user is ${avatarUrl}`);

}
showProfile(Profile1);
showProfile(Profile2)


