// //31_ No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.





let userNames :string [] =['admin','iqra','sadaf' ,'komal', 'salma'];

if(userNames.length ===0){
    console.log('we need to find some users!')
}else{
    userNames =[];
    console.log('all user names have been remove.  '  +  userNames.length);
}