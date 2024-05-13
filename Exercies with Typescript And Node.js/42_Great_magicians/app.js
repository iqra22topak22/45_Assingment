"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ['Hurry Potter', 'Herminoe granger', 'Ron weasley', 'Albus Dumbledore'];
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magician[i] = "the great " + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(Element => {
        console.log(Element);
    });
}
make_great(magician);
show_magicians(magician);
