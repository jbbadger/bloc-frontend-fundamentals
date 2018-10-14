/*
Enumerable Functions

Describe the map() function.
The map function iterates over each item in the array transforming them
according to the instructions. It doesn’t change the original array.

Describe the filter() function.
The filter function iterates over each item according to whether it’s true.
A new array is created.

What is the difference between the map() and filter() functions?
Map doesn’t change the original array, filter does.

Code Practice

Using the numbers provided in the editor, use the filter() function to keep any numbers that are greater than three, then use the reduce() function to sum the filtered numbers.
*/

var numbers = [1,2,3,4,5,6,7,8,9,2,3,4,5,6,1,2,3,4,5,6,7,8,8,4,3,2];
var total = numbers
    .filter(item => item > 3)
    .reduce((total, item) => total + item);

console.log(total); //equals 96
