"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// test for equality and inequality with string 
let fruit1 = "apple";
let fruit2 = "orange";
console.log(fruit1 === fruit2); //true equal to
console.log(fruit1 !== fruit2); // true    not equal to
// test using the lower case function 
let mixedCaesString = "helloworld";
console.log(mixedCaesString.toLowerCase() === "helloworld");
let mixedCaesString1 = "hello world";
console.log(mixedCaesString.toLowerCase() !== "helloworld");
//numberics
let mynumber = 10;
console.log(mynumber == 10); //true
console.log(mynumber !== 10); //true
console.log(mynumber > 5); //true  greater than
console.log(mynumber < 5); //false less than
console.log(mynumber <= 5); //false less than or equal to
console.log(mynumber >= 5); // true greater than or equal to
//and & ==== or ||
let num1 = 10;
let num2 = 5;
console.log(num1 > 9 && num2 < 5); //false
//true start            false stats
console.log(num1 > 9 || num2 < 5); //true
//true start            false stats
let myarry = [2, 3, "iqra"];
let myString = "iqra";
console.log(Array.isArray(myString)); ///false
console.log(Array.isArray(myarry)); // true
