/*Recursion

What is recursion?
A recursion is when when a function iterates over itself until the
defined result is reach.

When would a programmer want to write a recursive function
instead of an iterative one?
Recursives are preferred when a problem has many subproblems while an iterative
function is better for fewer subproblems.

What is a base case and what is its role in a recursive function?
Base cases set the parameters for when the function will cease to iterate.

What would happen if a programmer did not utilize a base case within a
recursive function?
The function would loop infinitely since there is no parameter to cease likely
causing the code to crash.

Code Practice

Create a recursive function that will take a positive integer parameter n and
return the factorial of n.
*/
var factorial = function (n) {
  if (n === 0) return 1;
  return (n * factorial(n-1));
}
