/*
Conditionals and Operators

What are the three types of conditional statements?
If, Else, and Else If statements.

What are four types of comparison operators and how you would use them?
Equality, Inequality, Greater Than, and Less Than operators. Equality and
Inequality will analyze if data is equal or not. > and < compares if data is
greater than or less than. They could be used in numerous ways to parse data
for more meaningful context.

Code

Create a variable called grade and set it to the grade you plan to receive on
this assignment. Then write an if statement that will check whether the grade
is equal to an A, B, C, D, or F and inform the user if they passed or failed
using console.log().
*/

Var grade = 'A';

if (grade === 'A' || grade === 'B' || grade === 'C') {
  console.log("You passed");
} else if (grade === 'D' || grade === 'F') {
  console.log("You failed");
} else {
  console.log("Incomplete")
}
