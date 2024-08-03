let score = "44 as"


console.log(typeof score);

console.log(typeof (score)); //this is also fine.

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber)

//Notes- "33" => 33
//"33abs" => NaN
// true => 1; false => 0

// now let's convert a string, number into a boolean value just like above.

let isLoggedIn = "sdvasd"

let booleanIsLoggedIn = Boolean(isLoggedIn); 

console.log(booleanIsLoggedIn);

//results..
// 1 => ture; 0 => false
//"" => false;
// "Zahid" => true


let someNumber = true

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);



