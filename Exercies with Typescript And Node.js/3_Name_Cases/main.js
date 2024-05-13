//lower case 
var personName = "iqra";
console.log("lowercase:", personName.toLowerCase());
//UPPER CASE
console.log('uppercase:', personName.toUpperCase());
//title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
