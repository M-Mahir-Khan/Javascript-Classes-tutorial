// In JavaScript, the extends keyword is used to create a class that is a child of another class, enabling inheritance. 
// This means the child class inherits properties and methods from the parent class. Inheritance allows you to create a new class that is based on an existing class, enhancing or modifying its behavior.

class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name,bread){
        super(nake);
        this.bread = bread;
    }

    speak(){
        console.log(`${this.name} barks.`);
    }

    getBread(){
        return this.bread
    }
}

let dog1 = new Dog("Rocky","German Shephard")
dog1.speak()
console.log(dog1.getBread())


// Another example

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    describe(){
        console.log(`I am ${this.name} and I am ${this.age} year old`);
    }
}

class Progremmer extends Person{
    constructor(name,age,yearOfExperienced){
        super(name,age);


        this.yearOfExperienced = yearOfExperienced;
    }

    code(){
        console.log(`${this.name} is coding`);
    }

}


const progremmers = [
    new Progremmer("John", 30, 10),
    new Progremmer("Mike", 25, 5),
]

function developSoftware(progremmers){
    for(let progremmer of progremmers){
        progremmer.code();
    }
}

developSoftware(progremmers);