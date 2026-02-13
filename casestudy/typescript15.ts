// Create a type called InstructorOrAdmin that can be either an Instructor or an Admin.

// Given a type Assignment = { title: string; dueDate: Date; points: number; }, create a type ReadonlyAssignment where none of the fields can be changed.

// Given a type LearnerStats = { quizzes: number; videos: number; assignments: number; }, create a type StatsAsStrings that has the same keys, but all values are strings.


type InstructorOrAdmin="Instructor"|"Admin" ;
type Assignment={
	title:string,
	dueDate:Date,
	points:number,


}
type ReadonlyAssignment={
	readonly [k in keyof Assignment]:Assignment[k];
}
type LearnerStats={
	quizzes:number,
	videos:number,
	assignments:number,
}
type StatsAsStrings={
	[K in keyof LearnerStats]: string;
		
}