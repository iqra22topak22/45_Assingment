// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.












// Store the locations in a array . make sure the array is not in alphabetical order.
let places :string[] =['Italy' ,'Germany', 'agra', 'Eifel Tower', 'Times square'];

//peint your array in its original order
console.log('orignal ' + places);

//print your array in alphabetical order withouttt modifying the actual list.
console.log('copy '  + [...places].sort());

// show that your array is still in this original order ny printing it.
console.log('orignal ' + places);

//print your array in reverse alphabetical order without changing the order of the original list.
console.log( 'copy ' + [ ...places].sort().reverse());

//show that your array is still in its original order by printing it again.
console.log('orignal ' + places);

//reverse the arder of your list . print the array to show that its order has changed
console.log( 'orignal '  + places.reverse());

//reverse the order of your list again .print the list  to show its is back to its original order.
console.log( 'orignaol ' + places.reverse());

//sort your array so it is stored in alphabetical order . print the array to show that its order has been changed.
console.log( 'orignal ' + places.sort());

//sort to change your array its stored in revers alphabetical order . print the list to show that its order has changed.
console.log( 'orignal ' + places.sort().reverse());


