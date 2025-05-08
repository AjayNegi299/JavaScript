//---------Scope-----------

if(true){
    const username = 'Ajay negi'
    if (username==='Ajay negi'){
        const website = 'youtube'
        console.log(username + website);
    }
    console.log(website); // we can't access inner scope variable
}
console.log(username); // we can't access variable out of scope


//scope in function
function outerfuction(){
    const username = 'ajay'
    function innerFunction(){
        const website = 'youtube'
        console.log(username);
    }
    console.log(website);

 innerFunction() 
}
outerfuction()

//second way to declear any function

const addTwo = function(num1,num2){
    return num1 + num2
}
console.log(addTwo(100,150));