
// In JavaScript, a static method is a method that belongs to the class itself rather than to instances of the class. 
// Static methods are called on the class, not on instances of the class. They are typically used to create utility functions that are relevant to all instances of the class.

class Square {
    constructor(width){
        this.width = width;
        this.height = width
    }

    static equals(a,b){
        return a.width * a.height === b.width * b.height;
    }

    static isValidDimantion (width,heigh){
        return width === heigh
    }
}

let square1 = new Square(3);
let square2 = new Square(4)
console.log(Square.equals(square1,square2))