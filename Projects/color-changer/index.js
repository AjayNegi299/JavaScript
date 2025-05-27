const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const heading = document.querySelector('h1')
const heading2 = document.querySelector('h2')

buttons.forEach((button)=>{
    // console.log(button);
button.addEventListener('click',(events)=>{
    if(events.target.id===button.id){
        body.style.backgroundColor = button.id
        if(button.id==='white' || button.id ==='greenyellow' || button.id ==='yellow'){
          heading.style.color = 'black'
          heading.style.fontSize = '50px'
          heading2.style.color = 'black'  
        }
        else{
            heading.style.color = 'white'
            heading2.style.color = 'white'
            heading.style.fontSize = '36px'
        }
        
    }
})

})


