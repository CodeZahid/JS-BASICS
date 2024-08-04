//Dates

//this is for current date.

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// this is for specific date.


//here 2444 is year, 3 is month starting form 0, and 12 is the day.

// let sDate = new Date(2444, 3, 12) 
let sDate = new Date("12-30-2002")

// use can use different functions to get different outputs.

// console.log(sDate.toDateString()) 
// console.log(sDate.toLocaleString()) 



//++++++++++time stamps++++++++++


let myTimeStamp = Date.now()


// this give the time in milisecond from 1970 



// console.log(myTimeStamp) 
// console.log(sDate.getTime()) 



// to convert time into miliseconds to seconds we devide it by 1000

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(newDate)
// console.log(newDate.getHours())
// console.log(newDate.getMonth())


console.log(`${newDate.toDateString} and the time is this`);


