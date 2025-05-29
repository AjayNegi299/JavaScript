//DOM Navigation = The process of navigating through the structure
//                 of HTML document using javascript

//.firstElementChild
// .lastElementChild
// .NextElementSibling
// .parentElement
// .children

/* -----------------first Child------------------*/

//for using particular style parent childElement
const element = document.getElementById('fruits')
// console.log(element);
const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = 'red' 

const ele = document.querySelectorAll('ul')
// console.log(ele);
ele.forEach((val)=>{ //val is variable that is traval all ul list 
    const element = val.firstElementChild;
    // element.style.backgroundColor = 'yellow'
})

/* -----------------last Child------------------*/

ele.forEach((val)=>{    //we used ele var beacuse ul list same
    const lastChild = val.lastElementChild
    // lastChild.style.backgroundColor = 'lightblue'
})

/* -----------------NextElementSibling------------------*/

const NextElement = document.getElementById('Vegetables')
// console.log(NextElement);
const nextSib = NextElement.nextElementSibling
// console.log(nextSib);
// nextSib.style.backgroundColor ='purple'

/* -----------------PreviousElementSibling------------------*/

const elem = document.getElementById('Banana')
// console.log(elem);
const preSibling = elem.previousElementSibling
// console.log(preSibling);
// preSibling.style.backgroundColor = 'red'

/*------------------ParentElement--------------------------*/

const value = document.getElementById('Patato')
const parentElement = value.parentElement
// parentElement.style.backgroundColor = 'purple'
// parentElement.style.padding = '10px'

/*------------------childern--------------------------*/

const parent = document.getElementById('fruits')
const child = parent.children
Array.from(child).forEach(ele =>{
    console.log(ele);
    child[0].style.backgroundColor = 'yellow'
})