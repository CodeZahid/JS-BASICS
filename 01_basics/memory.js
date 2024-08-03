//THIS IS AI GENERATED EXPLANATION...


// Memory in JavaScript

// 1. Value vs Reference Types
// - Value types (primitive): stored in memory as actual values
let num = 10; // example: value type

// - Reference types (non-primitive): stored in memory as references to objects
let obj = { name: 'John' }; // example: reference type

// 2. Memory Allocation
// - JavaScript engine allocates memory automatically
let str = 'hello'; // example: memory allocated for string

// 3. Memory Deallocation
// - JavaScript engine deallocates memory automatically through garbage collection
str = null; // example: memory deallocated

// 4. Pass by Value vs Pass by Reference
// - Pass by Value: copies the actual value
function changeValue(num) { num = 20; }
let num1 = 10;
changeValue(num);
console.log(num); // 10 - example: pass by value

// - Pass by Reference: copies the reference to the object
function changeObject(obj) { obj.name = 'Jane'; }
let obj1 = { name: 'John' };
changeObject(obj);
console.log(obj.name); // Jane - example: pass by reference

// 5. Memory Leaks
// - Unintentional memory retention due to lingering references
let arr = [];
for (let i = 0; i < 1000; i++) {
  arr.push({}); // example: creating objects in a loop
}
// memory leak: arr retains references to all objects




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//My Notes




// 2 tpyes of memory in Js.



// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "zoro"
let anotherName = myYoutubename
anotherName = "luffy"


console.log(myYoutubename)
console.log(anotherName)


let user1 = {
    email: "user1@gmail,com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "zahid@google.com"

console.log(user1.email)
console.log(user2.email)