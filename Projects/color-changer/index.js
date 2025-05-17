const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const heading = document.querySelector('h1')
const heading2 = document.querySelector('h2')

buttons.forEach((button)=>{
    button.addEventListener('click',(events)=>{
        console.log(events);
     if (events.target.id===events.target.id) {
        body.style.backgroundColor = events.target.id
        heading.style.color= 'white'
        heading2.style.color= 'white'

     }
    })
})

