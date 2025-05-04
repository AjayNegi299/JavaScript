let hour = 7
let greeting
if (hour == 9){
    greeting = "Happy Holi Bro"
    console.log(greeting)
}
else{
    greeting = "Happy Diwali"
    console.log(greeting)
}


let salary = 20000
if (salary >= 20000){
    salary = salary * 0.10
}
else if (salary> 10000 && salary < 20000){
    salary = salary * 0.05
}
else{salary = 0}

console.log(`your Bonus is ${salary}`)




//switch case
let day = new Date().getDate()

switch(day){
    case 0: console.log("sunday")
    break;
    case 1: console.log("Monday")
    break;
    case 2: console.log("tuesday")
    break;
    case 3: console.log("wednesday")
    break;
    case 4: console.log("thursday")
    break;
    case 5: console.log("friday")
    break;
    case 6: console.log("saturday")

    
}