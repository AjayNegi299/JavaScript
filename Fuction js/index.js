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

