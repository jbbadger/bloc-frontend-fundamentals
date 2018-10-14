/*
Basic Objects

In your own words, what is a JavaScript object?
An object is a group of properties made up of keys and their associated values.

What is a property of a JavaScript object?
Properties are made up of keys and values.
Values can be strings, numbers, or functions.

Code Practice

Declare a class called Clothes that takes three parameters in the constructor,
name, size, and price. Create a variable called shirt that is equal to a new
instance of Clothes with name = 'V-Neck', size = 'Medium' and price = 20.
*/

class Clothes {
      constructor(name, size, price){
      this.name = name;
      this.size = size;
      this.price = price;
      }
 }

let Shirt = new Clothes('V-neck', 'medium', 20);

console.log(Shirt);
