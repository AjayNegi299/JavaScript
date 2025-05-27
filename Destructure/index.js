
//Array Destructuring
const color = ['red','blue','white','black','green']
const [fisrt,second,third,fouth] = color;
console.log(fisrt);
console.log(second);
console.log(third);

//Object Destructuring
const person = {
    name: 'ajay',
    age : 28,
    cource: "BCA",
    Department : 'CS IT'

}

const {naam} = person;
console.log(naam);

class human{
constructor(name,age,...address){
    this.name=name
    this.age = age
    this.address = new Address(...address)
}
}
class Address{
    constructor(street,city,state){
        this.street = street
        this.city = city
        this.state = state
    }
}

const human1 = new human('ajay',25,'341A','Faridabad','Haryana')
console.log(human1.name);
console.log(human1.age);
console.log(human1.address);