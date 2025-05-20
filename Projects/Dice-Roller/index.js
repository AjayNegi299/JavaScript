function diceFunction(){
const noOfDice = document.getElementById('noOfDice').value
const diceResult =document.getElementById('diceResult')
const diceImages =document.getElementById('diceImages')
const value = []
const images = []

for (let i = 0; i < noOfDice; i++) {
   const values = Math.floor(Math.random()*6)+1
   value.push(values) 
   images.push(`<img src="Images/${values}.png">`)
}
diceResult.textContent = `dice: ${value.join(',')}`
diceImages.innerHTML = `${images.join(' ') }`
}

