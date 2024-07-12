// Why classes 
//  classes is part of OOP this is coding methodology or we can say it's a style  of coding / pattern 

// this style make our code more reusealbe and modular 
//  well Organizwd Code
//  Easier to debug


//  classes is like BluePrint.
// Imagine we have BluePrint of house and we are making 10 house with one bluePrint so 10 house have same features Eg:-> Structure, windows etc.

//  so we can say we are reusing this BluePrint to create this same house or we can say we are reusing BluePrint to build same features in 10 house


//  so this BLUEPRINT is called :-> CLASS
//  and house we called :-> OBJECT

// ========================================== Classes ========================================

// class :->

// class In JavaScript classes, there are two essential components: properties for storing data and methods for performing actions."

// Inharitance Propertien - What they have
//  Inharitance Method - What they can do

// /Let's Make our first class

class Rectangle {
    // Setup
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;

        console.log(`The Rectangle is being created`);
    }

    getArea() {
        return this.height * this.width;
    }

    printDiscription(){
        console.log(`The Rectangle is ${this.height} by ${this.width} and is ${this.color} color`)
    }
}

let rectangle1 = new Rectangle(4,5,"blue")
let rectangle2 = new Rectangle(2,6,"red");

console.log(rectangle1.getArea());
rectangle2.printDiscription()

