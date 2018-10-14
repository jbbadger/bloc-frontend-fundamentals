/*
Functions

Describe/define DRY and why functions exist.
DRY stands for Don’t Repeat Yourself which is a reminder that code should have
brevity and components should have singular focuses of function. Functions are
blocks of code which carry out an action.

Describe/define the difference between creating a function and calling/executing
a function.
Creating a function is putting the necessary code in place in order to carry
out the intended action. Executing the function is then accomplished by
invoking the function phrase.

Describe/define what arguments/parameters are and how they relate to functions.
Parameters go in the parentheses of the function phrase and act as a local
variable which is used inside the curly braces. When invoking the function the
argument is used in place of the parameter variable inside the function.

Describe/define mutating vs. non-mutating functions.
Mutating functions alter existing data while non-mutating creates new data
structures or objects.

Code Practice

Using the shoppingCart variable, create a function that takes the shoppingCart
variable and returns the total cost of both items as the totalvariable.
 */

 var shoppingCart = [20, 15];

function getTotalCost(prices){
  let total = 0;
  // code below
  for(let i=0; i < prices.length; i++){
    total += prices[i];
  }
  // code above
  return total;
}

getTotalCost(shoppingCart);
