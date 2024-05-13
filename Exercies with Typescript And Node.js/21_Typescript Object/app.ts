// 21_They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

 
 let person :{name:string, fname:string, age:number}={name:"iqra", fname: "mushtaq",age: 25}

 console.log(person)

interface person {
    age:Number,
    name:String,
    nationality:String,
    students: boolean
}
let person2 :person ={
    age: 22,
    name: "iqra",
    nationality: "pakistani", 
    students: true,
}
console.log(person)



