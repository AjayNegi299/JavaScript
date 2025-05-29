// Add And change DOM



//step 1 - create a element
const newLi = document.createElement('li')
const orange = document.getElementById('orange')

//Step 2 - Add attribute and properties
newLi.id = 'newItem'
newLi.textContent = 'Coconut'
newLi.style.backgroundColor = 'lightgreen'

//step 3 - Append Element in Dom
//  document.body.prepend(myH1)
 document.getElementById('fruits').append(newLi)
  document.getElementById('fruits').insertBefore(newLi,orange)

//step 4 - remove HTML element 