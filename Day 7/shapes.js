//Base Class Shape
export class Shape{
    constructor(){
        if(this.constructor === Shape){
            throw new Error("Shape is an abstract class and cannot be instantiated directly.");
        }
    }

    //Abstract Methods
    area(){
        throw new Error("Method `area()` must be implemented."); 
    }
    perimeter() {
        throw new Error("Method 'perimeter()' must be implemented.");
    }
    //overridable to display Shape details
    display(){
        return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
}
// Rectangle Class
export class Rectangle extends Shape{
    constructor(width,height){
        super();
        this.width = width;
        this.height = height;
    }
    area()
    {
        return this.width * this.height;
    }

    perimeter(){
        return 2*(this.width + this.height);
    }

    display(){
        return `Rectangle - ${super.display()}`;
    }
}

//Square Class
export class Square extends Shape{
    constructor(side){
        super();
        this.side = side;
    }
    area(){
        return this.side * this.side;
    }
    perimeter(){
        return 4*this.side;
    }
    display(){
        return `Square - ${super.display()}`;
    }
}

//Circle Shape
export class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius * this.radius;
    }
    perimeter(){
        return 2*Math.PI * this.radius;
    }
    display(){
        return `Circle - ${super.display()}`;
    }
}