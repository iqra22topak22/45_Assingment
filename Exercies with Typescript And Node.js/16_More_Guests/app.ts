//16_ More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list





let Guest_list :string[] =['Asif Ali Zardari', 'Nawaz shreef', 'Imran Khan']

// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party .\n\n')

// }

let Abusent_Guest :string ="asif Ali Zardari";
let New_Guest : string ="Kamran Tessori";

Guest_list[0] = New_Guest

for(let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party .\n\n')

}

console.log(`Mr. ${Abusent_Guest}  is not comming to the party.`);

console.log('Good news! we find big table so we are inviting 3 more guests')

Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2, 0, 'Maryan Nawaz');
Guest_list.push('Bilawal Bhutto Zardari');

for(let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party .\n\n')

}






