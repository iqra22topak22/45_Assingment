// 23_ Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


 
 let car ="subaru";

 // test 1:equality comparinson (true)
 console.log("is car == subaru ? i predict true" );
 console.log(car ==  "subaru"); //true

 // test 2 :strict equality comparison ?(true)
 console.log("is car === subaru ? i predict true" );
 console.log(car ===  "subaru"); //true

 // test 3: inequality comparison(false)
console.log("is car != subaru ? i predict true" );
 console.log(car !=  "subaru"); //false

 // test 4 :strict inequality comparison ?(false)
 console.log("is car !== subaru ? i predict true" );
 console.log(car !==  "subaru"); //false


// test 5 :less than comparison ?(false)
console.log("is car < subaru ? i predict true" );
console.log(car < "subaru"); //false (lexicographic comprison)



// test 6 :greater than comparison ?(false)
console.log("is car > subaru ? i predict true" );
console.log(car > "subaru"); //false

// test 7 :less than orequal  comparison ?(ture)
console.log("is car<= subaru ? i predict true" );
console.log(car<= "subaru"); //false

// test 8 :less than or equal comparison
console.log("is car >= subaru ? i predict true" );
console.log(car >= "subaru"); //true


// test 9  cheaking truhiness(true)
console.log("is car subaru ? i predict true" );
console.log(car); //true(mon-empty strick is truthy)



// test 10 : cheacking falsiness(false )
console.log("is car  subaru ? i predict true" );
console.log(car); //false (nagative of a truthy value)



