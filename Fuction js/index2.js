
//handle funtion with objcet
const user ={
    username: 'Ajay Negi',
    password: 'ajay123'
}

function handleObject(anyObject){
    return `your username: ${anyObject.username} and your password: ${anyObject.password}`
}
// const result = handleObject(user)
// console.log(result);

const result = handleObject({
    username:'ajay negi',
    password: 'ajay123'
})
console.log(result);



//fuction with array
const NewArray = [25,45,65,75,45,25,10]
function returnSecondValue(anyObject){
    return NewArray[2]
}

const arrayResult = returnSecondValue(NewArray)
console.log('Second Value of Array:',arrayResult);


//multiple argument into single parameter by using rest  it return an array

function calculateCardPrice(...val){
  return val
}
console.log(calculateCardPrice(200,300,400,500));


//funtion with condition
function loginUserMessage(username){
if(!username){
    return 'Please! enter a username'
}
  return `${username} you just logged in`
}
const isUserLoggedIn = loginUserMessage('ajay negi')
console.log(isUserLoggedIn);