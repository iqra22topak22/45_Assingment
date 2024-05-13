"use strict";
const userNames = ['admin', 'bugs bunny', 'daffy duck', 'tweety'];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'admin') {
        console.log('hello admin ,would you like to see a status report?');
    }
    else {
        console.log(`hello ${userNames[i]} ,thank you for logging in again`);
    }
}
