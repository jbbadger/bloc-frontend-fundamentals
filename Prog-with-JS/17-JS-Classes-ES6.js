/*Classes ES6

What is object-oriented programming?
A programming model which separates data by objects and defines functions
through the use of classes.

What is a constructor?
There can only be one constructor per class which is the method that is
called when creating or initializing the class.

What is the purpose of the keyword super?
The purpose is to indicate that the constructor is the child of another class.

What are classes that do not use the keyword extends called?
Classes not using extends are parent classes.

Code Practice

Using the Clothes class we previously created, create a Shirt class that
extends the Clothes class. Don't forget the super().
*/
var Clothes = class {
    constructor(name, size, price){
        this.name = name;
        this.size = size;
        this.price = price;
    }
}
// add code below

class Shirt extends Clothes {
  constructor() {
    super('t-shirt', 'large', '10');
  }
}
