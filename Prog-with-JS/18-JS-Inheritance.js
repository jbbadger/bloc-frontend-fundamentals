/*Inheritance

What does "DRY" stand for? What does the "DRY principle" imply in programming
or software development?
DRY stands for ‘don’t repeat yourself.’ DRY implies that brevity is important
in that desired actions should have the least amount and least complex code
possible. In relation to inheritance, this means extending already existing
code instead of creating new code.

Code Practice

Following the examples above, create a new prototype called Productand three
instances of it. Each instance should be a separate product
(for example, a shirt, a jacket, and a scarf).
*/
function Stock(item) {
  this.item = item;
}

// methods
Stock.prototype.Product = function() {
  console.log("This item is a " + this.item + ".");
};

var tShirt = new Stock ('shirt');
var jacket = new Stock ('jacket');
var scarf = new Stock ('scarf');

tShirt.Product();
jacket.Product();
scarf.Product();
