let newString = "ajay  "
console.log(newString.concat(' Negi').toUpperCase());

let newName = 'ajay negi'
let age = 24
let domain = 'Development'

//Indexing and UpperCase
console.log(`Hello! name is "${newName.toUpperCase()}" and age is "${age}" and my interest in "${domain}"`);
console.log(domain[0]);
console.log(domain.indexOf('v'));

console.log(domain.__proto__);

//SubString
const newUser =newString.substring(0,3)
console.log(newUser)

//Slice
const anotherUser = newString.slice(-7,3)
console.log(anotherUser);

//Trim
console.log(newString.trim().length);

//Replace
const userEmail = 'ajaynegi288@gmail.com'
console.log(userEmail.replace('288','299'))

//include
console.log(userEmail.includes('ajay'))

//split
const anotherUserName = 'ajay-negi-negi'
console.log(anotherUserName.split('-'));

