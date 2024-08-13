"use strict";

if (4 == 9){
  console.log("OK!")
} else {
  console.log("Error!");
}

const num = 99;
/*
if (num < 49){
  console.log("It is true")
} else {
  console.log("try again")
}

// Тернарный оператор

(num === 50) ? console.log("ok!") : console.log("Error!");
*/
switch (num) {
  case 49:
    console.log("It isn't true");
    break;
  case 100:
    console.log("It isn't true");
    break;
  case 50:
    console.log("you are right");
    break;
  default:
    console.log("It isn't true");
    break;
}


// logical operators


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets){
  console.log("We are happy")
} else {
  console.log("It's not good")
};

console.log(hamburger === 3 && cola === 2);

if (hamburger === 3 && cola === 1 && fries){
  console.log("Я сыт!")
} else {
  console.log("I want to eat")
}

const hamburgerNew = 5;
const friesNew = 0;

if (hamburgerNew === 3 && friesNew){
  console.log("Я сыт!")
} else {
  console.log("We are leaving from this cafe")
}


let johnReport, alexReport, samReport, mariaReport = "done";

console.log(johnReport || alexReport || samReport || mariaReport)


console.log(!1);