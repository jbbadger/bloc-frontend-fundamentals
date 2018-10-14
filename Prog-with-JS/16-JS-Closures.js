/*Closures

What does "lexical scope" mean in JavaScript?
Lexical scope limits the scope a variable to the block of code it
is defined within.

What is an advantage of a programming language that uses lexical scoping? T
he main advantage of lexical scoping is the use of closures.

What is a closure?
A closure is when an outer function returns an inner function so a closure it
not only a function in and of itself but also performs in the environment of
a function.

What would be a use case of a closure?
Closures preserve data which makes them useful to efficiently create
variables in subsequent code.

Code Practice
*/
/*Create your own example of a closure and see if it works by using the console.log to print values and verifying they are what you expect.*/

var sum = function(){
  var y = 120;
  function addUp(x){
    console.log(x + y);
  }
  return addUp;
}
var toFax = sum();
toFax(50); //prints 170
