"use strict";
let Guest_list = ['Asif Ali Zardari', 'Nawaz shreef', 'Imran Khan'];
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party .\n\n')
// }
let Abusent_Guest = "asif Ali Zardari";
let New_Guest = "Kamran Tessori";
Guest_list[0] = New_Guest;
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party .\n\n')
// }
// console.log(`Mr. ${Abusent_Guest}  is not comming to the party.`);
// console.log('Good news! we find big table so we are inviting 3 more guests')
////array me 3 guest add kia h
Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2, 0, 'Maryan Nawaz');
Guest_list.push('Bilawal Bhutto Zardari');
//yahan py 6 guest k array ko pring krwaya h
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party .\n\nthank you')
// }
//sorry guest for not invited
// console.log('\nsorry we can not arrange big table, only tow peoples will be invited\n');
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    //     console.log(`sorry Mr. '  ${remove_Guest}, "you are not invited for dinner`)
}
//hamare bachy hoy 2 invited guest
// for(let i=0; i<Guest_list.length; i++){
//     console.log("Dear Mr. " + Guest_list[i] + ",\n\nyou arw still invited.\n\n Thank you ")
// }
// / many sare guest aarray say remove kia
Guest_list.splice(0, 2);
console.log(Guest_list);
// Exercise 19
// print a message indicating the number of people you are inviting  to  dinner
console.log(`Total number of guest are ${Guest_list.length}`);
