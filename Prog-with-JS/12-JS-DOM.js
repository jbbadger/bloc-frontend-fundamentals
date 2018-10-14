/*Document Object Model

What does the acronym DOM stand for and explain in your own words what it is.
Document Object Model. Dom is when javascript classifies a website as a single
object with all of the HTML and CSS components nested within.

How does the DOM make web programming more efficient?
DOM creates a query tool for the website where you’re able to find items
much quicker than manually.

Code Practice

Using createElement and getElementById. Add a new Shirt to the ul. Set the innerText equal to 'Mens T-shirt'.
*/

var list = document.getElementById('list');
let li = document.createElement('li');
li.innerText = 'Mens T-Shirt';
list.appendChild(li);
