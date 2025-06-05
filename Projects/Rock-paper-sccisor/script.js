const choice = ['Rock','Paper','Scissors']
const playerDisplay = document.getElementById('PlayerDisplay')
const computerDisplay = document.getElementById('ComputerDisplay')
const resultDisplay = document.getElementById('resultDisplay')

function PlayerGame(playerChoice){
    const computerChoice = choice[Math.floor(Math.random()*3)]
    let result = ''
    if(playerChoice===computerChoice){
        result = "it's a Tie"
    }
    else{
        switch(playerChoice){
            case 'Rock':
                result = (computerChoice==='Scissors')? 'YOU WIN!':'YOU LOSE!';
                 break;

            case 'Paper':
               result =  (computerChoice==='Rock')? 'YOU WIN!':'YOU LOSE!';
                break;

            case 'Scissors':
               result =  (computerChoice==='Paper')? 'YOU WIN!':'YOU LOSE!';
                break; 
        }

    }
    playerDisplay.textContent = `Player: ${playerChoice}`
        computerDisplay.textContent = `Computer: ${computerChoice}`
        resultDisplay.textContent = result;

          resultDisplay.classList.remove("green", "red") 
        
        switch(result){
            case 'YOU WIN!':
                resultDisplay.classList.add("green")
                break;
            case 'YOU LOSE!':
                resultDisplay.classList.add("red")
                break;
        }
}