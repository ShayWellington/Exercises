console.log('exercises')

// Operators Exercises
console.log('Operators')

/* Bagels cost $4.35 each (before tax).
Write a program to calculate how much 9 bagels cost and output the total.
Your program should output the answer $39.15.
*/

var bagelQuantity = 9;
var bagelPrice = 4.35;
var totalPrice = bagelQuantity * bagelPrice;

console.log(bagelQuantity + ' bagels at $' + bagelPrice + ' each comes to $' + totalPrice);

/* Scones cost $0.60 each.
Write a program to calculate and output the total price of 27 scones.
You should get $16.2.
*/

var sconesQuantity = 27;
var sconesPrice = .6;
var totalPrice = sconesQuantity * sconesPrice;

console.log( sconesQuantity + ' scones at $' + sconesPrice + ' each comes to $' + totalPrice);

/* It costs me $3.80 to make 13 muffins.
How much did each muffin cost to make?
The answer is approximately $0.29 each, but write a program to calculate this.
*/

 var muffinTotal = 3.8;
 var muffinQuantity = 13;
 var muffinPrice = muffinTotal / muffinQuantity;
 var mp = muffinPrice.toFixed(2)

 console.log( 'It costs $' + mp + ' to make each muffin' );

 /* I have $100. How many bagels can I buy with that?
 The answer is 22, but write a program to do the calculation.
The most sensible program uses a function that JavaScript provides to
round a number down – go look it up.
*/

var bagelPrice = 4.35;
var totalMoney = 100;
var totalBagels = totalMoney / bagelPrice;
var tb = totalBagels.toFixed();

console.log( 'I can buy ' + tb + ' bagels with $' + totalMoney );

/* How many scones can I buy with $100? 166, but write the program.
*/

var sconesPrice = .6;
var totalMoney = 100;
var totalScones = totalMoney / sconesPrice;
var ts = totalScones.toFixed();

console.log( 'I can buy ' + ts + ' with $' + totalMoney);




// Defining Function Exercises
console.log('Defining Function')



// Conditions Exercises
console.log('Conditions')



// Control Statements Exercises
console.log('Control Statements')



// Loops Exercises
console.log('Loops')



// Strings Exercises
console.log('Strings')



 // Extra Exercises 1
 console.log('Extra Exercises')
