//44_Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//   and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//   using a different number of arguments each time.




function makeSandwich (item: string[]){
    console.log('\nmaking your sandwich with:');
    item.forEach(Element => console.log("_ "+ Element));

    console.log('enjoy your sandwich\n')

}
makeSandwich(['Ham', 'Cheese', 'lettuce'])

makeSandwich(['Turkey',  'Bacon'])

makeSandwich(['Peanut butter', 'jelly'])