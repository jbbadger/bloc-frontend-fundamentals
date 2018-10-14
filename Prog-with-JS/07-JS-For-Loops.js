/*
For Loops

What are the three things you need to provide for a loop?
I.e., in for(a ; b ; c){}, what are a, b, and c?

a = Initialization sets the initial condition,
b = Condition sets the condition against what the loop check to see if
it is true,
c = Expression runs the loop until the condition comes back false.

Using the shoppingCart variable below, use a for() loop to iterate over
the array and console.log() the shopping cart item's name.
*/

var shoppingCart = [
  {
      id: 0,
      name: 'Mens Shirt',
      price: 20,
      size: 'Large'
  },
  {
  id: 1,
  name: 'kids shirt',
  price: 15,
  size: 'small'
}
]

// write code below

for (i = 0; i < shoppingCart.length; i++){
    console.log (shoppingCart[i].name);
};
