const score = 333
console.log

const balance = new Number(111)
console.log(balance);


// Number {111}
// [[Prototype]]
// : 
// Number
// constructor
// : 
// ƒ Number()
// toExponential
// : 
// ƒ toExponential()
// toFixed
// : 
// ƒ toFixed()
// toLocaleString
// : 
// ƒ toLocaleString()
// toPrecision
// : 
// ƒ toPrecision()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()

console.log(balance.toString());  //now it has become a string, giving it some additional properties.


console.log(balance.toString().length)
console.log(balance.toFixed(2));

const otherNumber = 12.2321

console.log(otherNumber.toPrecision(3))

const hundreds = 10000000
console.log(hundreds.toLocaleString("en-IN"));

// ++++++++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++


console.log(Math);

console.log(Maths.abs(-1234)); //this makes only the negative value positive.

console.log(Math.round(33.9)); // this will be 34


console.log(Math.ceil(33.9)); //takes to top value = 34
console.log(Math.floor(33.9)); // takes to floor value = 33


console.log(Math.random()); //the value will be always between 0-1 

console.log(Math.random()*10); // Random value will come from 0 - 10

console.log(Math.random()*10 + 1); // same but from 1 - 10

console.log(Math.floor(Math.random()*10 + 1)); // same but from 1 - 10 to round the dacimals.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // this will give value from (10 - 20)



