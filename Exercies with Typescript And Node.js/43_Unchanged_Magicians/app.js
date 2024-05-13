"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ['Hurry Potter', 'Herminoe granger', 'Ron weasley', 'Albus Dumbledore'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = "the great " + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(Element => {
        console.log(Element);
    });
}
const copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log(`\n\nthis is my original array`);
show_magicians(magician);
console.log(`\n\nthis is my moddfied copy of the  array`);
show_magicians(copyMagicianArray);
