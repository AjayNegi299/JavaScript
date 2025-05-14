//data type
let amount = 100
amount = amount.toString()
console.log(amount,typeof amount);

//date
let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)

//destructure conceptcls

const user={
username:'ajay',
password: '1234'
}

console.log(Object.keys(user));
console.log(Object.values(user));

const {username:firstname}=user
console.log(firstname);

//ternary operators

const age =18.5
age <=18 ? console.log("Teenager"):console.log('Adult');

//iteration 1. forOf

const arr = [1,2,3,4,5,6,7,8,9,10]
for (const element of arr) {
    if (element === 5) {
        console.log("5 Detected");
        break;
    }
    console.log(element);
}

//forin for object

for (const key in user) {
    console.log(key,user[key]);
}

//ForEach
const coding = ['javaScript','Java','python','Ruby']
coding.forEach((item)=>{
    console.log(item)
})

const myArr = [1,2,3,4,5,6,7,8,9]
const result=myArr.map((item)=> item * 10)
console.log(result);

const result2 = result.filter((ele)=>ele>50)
console.log(result2);

//do this with forEach

const arr2 =[]
myArr.forEach((val)=>{
    if (val > 4) {
        val*=10
        arr2.push(val)
    }
})
console.log(arr2);