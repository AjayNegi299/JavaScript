//---------singleton and constructor-------------//
const tinderUser = new Object()  // Declear object using singleton and constructor
console.log(tinderUser)

//Nexted object

const user ={
    email: 'ajaynegi@gmail.com',
    FullName : {
        firstName: {
            firstName: 'ajay',
            lastName: 'Negi'
        }
    
    }
}

console.log(user.FullName.firstName.firstName);

//merge 2 object together

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}
const obj3 = {5:'a',6:'b'}

const obj4 = Object.assign({},obj1,obj2,obj3) // first way of merging
console.log(obj4);

const obj5 = {...obj1,...obj2,...obj3} // 2nd way using spread operator
console.log(obj5);

//---Extracting of value and keys----

console.log(Object.keys(obj1))
console.log(Object.values(obj1))

console.log(obj1.hasOwnProperty('a'))

// object destructure
const cource = {
    courceName : 'Web Development',
    price: 299,
    courceInstructor: 'Ajay Negi'
}

console.log(cource.courceInstructor)  // simple print to value

const {courceInstructor : instructor} = cource
console.log(instructor)
