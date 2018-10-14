/*Advanced DOM Manipulation

What is the difference between document.querySelector() and
document.querySelectorAll()?
querySelector will retrieve the first searched element and
querySelectorAll will retrieve all elements by the searched name.

What is the difference between getElement(s)By and querySelector(All)?
ElementsBy returns an HTML Collection of elements by tag name,
while SelectorAll returns a list of elements that match the group of selectors.

What do JavaScript event handlers do and what is an example of one?
Handlers are a set of functions which are actionable when an event is triggered.
An example would be when an end-user clicks a button that is the triggering
event which then runs the event handler which produces the intended outcome
of the button function.

Code Practice

Using the code from the prior checkpoint,
add an Event Handler to the <li>element and
console.log() the name of the shirt they
selected.
*/

var list = document.getElementById('list');
let li = document.createElement('li');
li.innerText = 'Mens T-Shirt';
list.appendChild(li);

document.getElementById('list').onclick = (clickMe) => {
  console.log(clickMe.target.innerText);
};

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<h3>Shirts</h3>
<ul id='list'>
    <li>Biker Jacket</li>
</ul>
</body>
</html>
