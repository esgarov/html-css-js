
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.occupation = "unemployed";
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I'm currently ${this.age} years old`);
    }
}
let person = new Person("Willy", 33);
console.log(person);

class Student extends Person {
    #grade;
    constructor(name, age, grade){
        
        super(name, age);
        this.#grade = grade;
        this.occupation = "Student";
    }
    greet(){
        console.log(`Hello, I'm a student and my name is ${this.name}. My current grade is ${this.#grade}.`);
        
    }
}

class Teacher extends Person{
    constructor(name, age, employeeId){
        super(name, age);
        this.employeeId = employeeId;
        this.occupation = "Teacher";
    }
    #callByFirstName() {
        console.log(`Hello, my name is ${this.name}`)
    }
    greet() {
        this.#callByFirstName();
    }
}

let student1 = new Student("Jack", 32, 3);
//student1.grade = 1;
student1.greet();

// console.log(student1.grade);

console.log(student1);

let teacher1 = new Teacher("Alice", 28, 1);
teacher1.greet();

console.log(teacher1);