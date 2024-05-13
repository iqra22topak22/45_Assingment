"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwich(item) {
    console.log('\nmaking your sandwich with:');
    item.forEach(Element => console.log("_ " + Element));
    console.log('enjoy your sandwich\n');
}
makeSandwich(['Ham', 'Cheese', 'lettuce']);
makeSandwich(['Turkey', 'Bacon']);
makeSandwich(['Peanut butter', 'jelly']);
