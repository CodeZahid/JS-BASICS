 const name = "zahid"
 const repoCount = 11;

 //console.log(name + repoCount + " Value")

 // above written code is old way to write and not preffered anymore.

 // you should write this way now↓...

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// Modern way to declare a string..and mastering this is our goal.


const gameName = new String("GTA 6")

// MASTERING THE [PROTOTYPE] OF THE STRING DATA TYPE IS OUR GOAL**

console.log(gameName)

console.log(gameName[2])

// now using the prototype methods..

console.log(gameName.__proto__);


console.log(gameName.length)
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('A'));

const newString = gameName.substring(0, 2)
console.log(newString);

const anotherString = gameName.slice(-3, 0)

console.log(anotherString)

const newStringOne = "      Zahid     "

console.log(newStringOne)
console.log(newStringOne.trim()) //to trim unwanted wide spaces.


const url = "https://zahid.com/code%20zahid%20fuck"

console.log(url.replace('%20', '-'))