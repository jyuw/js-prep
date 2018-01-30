/* JavaScript Exercises 1*/

/* Create an array and add three numbers to it. */
var myArray = [2, 11, 46];

/* Use your array to return the second number. */
myArray[1];

/* What data type is 123/12? "Things in quotes!"? undefined?
123/12 (= 10.25) = Integer
"Things in quoutes!" = String
undefined = Undefined
*/

/* Write an if statement that returns true. */

if (100 > 50){
  alert("true");
}
else{
  alert("false");
}

/* Consider these two arrays: myArray = ['Thomas', 'Amber', 'Raoul'] and
emptyArray = []. Use a for loop to add our names to emptyArray. */

myArray = ['Thomas', 'Amber', 'Raoul'];
emptyArray = [];

for (var i = 0; i < myArray.length; i++) {
  emptyArray[i] = myArray[i];
}

/* Javascript Exercises 2*/

/* Write a function that returns your first name. Call it. */
function myFirstName(name) {
  console.log(name);
}

myFirstName('Jade');

/* Write a new function that takes your name as an input. The function should
return your first name, plus your last name, as one string. (Hint: strings can
be combined with a +) */
function myFullName(first, last) {
  return 'My name is ' + first + ' ' + last;
}

myFullName('Jade', 'Fang');

/* Javascript Exercise 3 */

/* What is this? Does it have an equivalent in Ruby?
- It's how you set an instance variable so that it can be used everywhere else
- equivalent in Ruby would be setting using @ */

class Person{
  constructor(first, last){
  this.first = first;
  this.last = last;
}

setName(d, e){
  this.first = d;
  this.last = e;
}

fullName() {
  return this.first + " " + this.last;
}

var bob = new Person("Thomas", "Ochman");
bob.fullName();
}

/* Javascript Array exercise */
//Array.find
let numArray = [2, 4, 6, 8];
let find = numArray.find(n => n == 2);

find
// => 2

//Array.reduce
const addArray = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

addArray.reduce(reducer);
// => 10
