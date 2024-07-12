// Getters
// Getters are methods that get the value of a specific property. They allow you to execute code when a property is accessed.


// Setters
// Setters are methods that set the value of a specific property. They allow you to execute code when a property is assigned a value.
class Square {
    constructor(width) {
        this.width = width;
        this.heigh = width
    }

    get area() {
        return this.width * this.heigh;
    }

    set area(area){
        this.width = Math.sqrt(area)
        this.heigh = this.width
    }
}

let square1 = new Square(20)
square1.area = 20
console.log(square1.heigh);



class User {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get upperCase(){
        return this._name.toUpperCase()
    }

    set changeName(name){
        this._name = name;
    }

}

let user1 = new User("Mahir",17);
user1.name = "Mahir Khan"
console.log(user1._name);
// console.log(user1.upperCase);





