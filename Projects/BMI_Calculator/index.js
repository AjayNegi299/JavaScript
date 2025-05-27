const form = document.querySelector('form')
form.addEventListener('submit',(ele)=>{
  ele.preventDefault()
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const result = document.querySelector('#result')


if(height==''|| height < 0 || isNaN(height)){
   result.innerText =  `plase enter valid number: ${height}`
}
else if(weight==''|| weight < 0 || isNaN(weight)){
   result.innerText =  `plase enter valid number: ${weight}`
}
else{
  heightInMeters = height / 100
  BMI = weight / (heightInMeters * heightInMeters)
  result.innerHTML =  `${BMI}`
}
})

