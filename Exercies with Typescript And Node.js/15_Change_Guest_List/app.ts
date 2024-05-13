// //15_ Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list













let Guest_list :string[] =['Asif Ali Zardari', 'Nawaz shreef', 'Imran Khan']

for(let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party .\n\n')

}

let Abusent_Guest :string ="asif Ali Zardari";
let New_Guest : string ="Kamran Tessori";

Guest_list[0] = New_Guest

for(let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\n It is our pleasure to invite you in our party .\n\n')

}

console.log(`Mr. ${Abusent_Guest}  is not comming to the party.`)

