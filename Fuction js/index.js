//--------Function-----------
 
function firstCode(){
    console.log('Hello World!');
}
firstCode()

//Parameterized Constructor
function addTwoNumber(num1,num2){
    let result = num1+num2
    return result
}
const result = addTwoNumber(7,6)
console.log(result);

//checkguessGame using javaScript Function
function checkguess(guessNumber,randomNumber){
    if(guessNumber===randomNumber){
        return `you guess the correct number ${guessNumber}`
    }
    else{
        return `sorry! You guess wrong number`
    }

}
const randomNumber = Math.floor((Math.random()*10)+1)
console.log('random number your choose:',randomNumber);

const checkguessResult= checkguess(1,randomNumber)
console.log(checkguessResult);


// Palindrome Checker
function Palindrome(word){
    const reversed = word.split('').reverse().join('');
    return word === reversed ? 'palindrome' : 'Not Palindrome'
}
const checker = Palindrome('aja')
console.log(checker);

//Rock Paper Sizzer
const guessingGame= function (userChoice,computerChoice){
    if (computerChoice> 0 && computerChoice <= 3.3){
        computerChoice = 'Rock'
    }
    else if(computerChoice>3.3 && computerChoice <= 6.6){
        computerChoice= 'Paper'
    }
    else{
        computerChoice= 'sccier'
    }
    
    if(userChoice==='Rock'){
        if(computerChoice==='Rock'){
            return `Match Draw! Your Choice:"${userChoice}" Computer Choice:"${computerChoice}"`
        }
        else if (computerChoice==='Paper'){
            return ` Sorry! You lose - Your Choice:"${userChoice}" Computer Choice: "${computerChoice}"`
        }
        else{
            return `Congratulation You Win! Your Choice:"${userChoice}" Computer Choice: "${computerChoice}"`
        }
 
    }
    if(userChoice==='Paper'){
        if(computerChoice==='Paper'){
            return `Match Draw! Your Choice:"${userChoice}" Computer Choice: "${computerChoice}"`
        }
        else if (computerChoice==='sccier'){
            return ` Sorry! You lose - Your Choice:"${userChoice}" Computer Choice: "${computerChoice}"`
        }
        else{
            return`Congratulation You Win! Your Choice:"${userChoice}" Computer Choice: "${computerChoice}"`
        }
 
    }
    if(userChoice==='sccier'){
        if(computerChoice==='sccier'){
            return `Match Draw! Your Choice:"${userChoice}" Computer Choice: "${computerChoice}"`
        }
        else if (computerChoice==='Rock'){
            return ` Sorry! You lose - Your Choice:"${userChoice}" Computer Choice: "${computerChoice}"`
        }
        else{
            return `Congratulation You Win! Your Choice:${userChoice} Computer Choice: ${computerChoice}`
        }
 
    }
}

const computerChoice = Math.floor(Math.random()*10)+1
const gameResult = guessingGame('Rock',computerChoice)
console.log(gameResult);
