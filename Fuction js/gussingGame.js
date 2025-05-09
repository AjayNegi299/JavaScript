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