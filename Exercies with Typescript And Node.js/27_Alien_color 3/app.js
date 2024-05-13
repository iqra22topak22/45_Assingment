"use strict";
// alien color #3: turn your if _else chain from exercies 5_4 into an if _else chain
Object.defineProperty(exports, "__esModule", { value: true });
// write three virsions of this program , naking sure each message is printed for the appropriate color alin
let alienColor = "green";
//if the alien color green print a message that the player earned 5 points.
//if the alien color yellow print a message that the player earned 10 points.
///if the alien color red print a message that the player earned 15 points.
// viesion 1 of program
if (alienColor === "green") {
    console.log(" virsion 1: the player earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("the player earned 10 points.");
}
else if (alienColor === "red") {
    console.log("the player earned 15 points.");
}
else {
    console.log('please select right color');
}
// virsion 2 of program 
alienColor = "yellow";
if (alienColor === "green") {
    console.log("the player earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("version 2:the player earned 10 points.");
}
else if (alienColor === "red") {
    console.log("the player earned 15 points.");
}
else {
    console.log('please select right color');
}
// virsion 3 of program
alienColor = "red";
if (alienColor === "green") {
    console.log("the player earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("the player earned 10 points.");
}
else if (alienColor === "red") {
    console.log("version 3: the player earned 15 points.");
}
else {
    console.log('please select right color');
}
