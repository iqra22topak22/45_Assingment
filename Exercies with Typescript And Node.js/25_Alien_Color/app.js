"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//creat a veriable called aline _color
let alien_color = "green";
//write if  statement to test whether the alien's color is green.if it is , print a massage that the player just earned 5 points 
if (alien_color === "green") {
    console.log("player just earned 5 points!");
}
//write  one virson of this progrm that the if test and other that fails .
alien_color = "yellow";
// (the virsion that  fails will have no output)
if (alien_color === "green") {
    console.log("player just earned 5 points!");
}
