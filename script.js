class Person {
	constructor(name, age){
		this._name = name;
		this._age = age
	}
    get name(){
        return this._name;
    }
    set age(age){
        this._age = age;
        // return this.age;
    }
}

class Student extends Person {
    constructor(name, age, subject){
        super(name, age);
        // this.subject = subject;
    }
    study(){
        // return this.subject;
		console.log(`${this.name} is studying`)
    }
}

class Teacher extends Person {
    constructor(name, age, subject){
        super(name, age);
        // this.subject = subject
    }
    teach(){
        // return this.subject;
		console.log(`${this.name} is teaching`)
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;