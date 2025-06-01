const mybox= document.getElementById('box')
const button = document.querySelector('button')

button.addEventListener('mousemove',()=>{
    mybox.style.backgroundColor = 'tomato';
    mybox.textContent = `Don't Do it 😖`
    
})
button.addEventListener('click',()=>{
    mybox.style.backgroundColor = 'red';
    mybox.textContent = `OUCH 😖`
    
})
button.addEventListener('mouseout',()=>{
    mybox.style.backgroundColor = 'greenyellow';
    mybox.textContent =  `Don't Do it 😖`
    
})