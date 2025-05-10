//------Control Flow--------//
const isUserLoggedIn = 'True'
if(isUserLoggedIn){
    console.log('Hello World');
}

//Block Scope in if-else

const balance = 1000
if(balance>500){
    let accountNumber = 1247545244
    console.log(accountNumber);
}

// console.log(accountNumber); // this give a error because we cant use local variable from if condition

//----Switch Case------

const month = 'feb'
switch (month) {
    case 'jan':
        console.log('january');
        break;
    case 'feb':
        console.log('Febuary');
        break;
    case 'mar':
        console.log('March');
        break;
    case 'Apr':
        console.log('April');
        break;

    default:
        console.log('choose Correct Month');
        break;
}

// how to find array is empty

const myArray = []
if(myArray.length==0){
console.log('Array is empty');
}

//how to find object is empty

const myObj ={}
if(Object.keys(myObj).length==0){
    console.log('object is empty');
}

//-----ternary operator-----

const age = 19
age>18 ? console.log('you are eligible for vote'):console.log("sorry! you are not eligible");