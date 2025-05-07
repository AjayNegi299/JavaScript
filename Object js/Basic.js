//Objects
const jsUser = {
    Name: 'ajay negi',
    age: 18,
    location: 'Faridabad',
    isLoggedIn : false,
    lastLoggedIn : ['Saturday','Monday']
}

console.log(jsUser.Name);
console.log(jsUser['Name'],jsUser['age']);

jsUser.greeting = function(){
    console.log('Hello! jsUser:');
    console.log(`Hello! JsUser ${this.Name}`);

}

console.log(jsUser.greeting());
console.log();