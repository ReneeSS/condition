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