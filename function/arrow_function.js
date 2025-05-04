let sayHi = () => console.log("Hello!");
sayHi();

let age = 20;
let welcome = (age < 18) ? 
  ()=> console.log("your are teenager") : 
  ()=>console.log("your are Adult");
welcome();


let sum = (a,b)=> {
    let result = a * b
    return result
}
 console.log(sum(10,20))


// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { console.log("You agreed."); },
//     function() { console.l("You canceled the execution."); }
//   );

function hello()
{
    let names = "Ajay Negi"
    console.log(names)
}
hello()

// console.log(names); //we cannot acces the location variable from here 