"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_user = ['IqRa', 'ShaBnam', 'SumIya', 'DuAa', 'John'];
let new_user = ['bilal', "IqRa", 'rashid', 'sumIya'];
new_user.forEach(newusername => {
    let lowercase = newusername.toLowerCase();
    if (current_user.map(c_user => c_user.toLowerCase()).includes(lowercase)) {
        console.log(`The usenamr ${newusername} is not available.please write a differnt username`);
    }
    else {
        console.log(`the username ${newusername} is avaliable.`);
    }
});
