"use strict";
let Guest_list = ['Asif Ali Zardari', 'Nawaz shreef', 'Imran Khan'];
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party .\n\n')
// }
let Abusent_Guest = "asif Ali Zardari";
let New_Guest = "Kamran Tessori";
Guest_list[0] = New_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party .\n\n');
}
console.log(`Mr. ${Abusent_Guest}  is not comming to the party.`);
console.log('Good news! we find big table so we are inviting 3 more guests');
Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2, 0, 'Maryan Nawaz');
Guest_list.push('Bilawal Bhutto Zardari');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party .\n\n');
}
