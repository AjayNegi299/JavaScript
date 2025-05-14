//----------filter-----------

const arr = [1,2,3,4,5,6,7,8,9,10]
const num =arr.filter((item)=> item > 5)
console.log(num);

const arr1 = [1,2,3,4,5,6,7,8,9,10]
const num1 =arr.filter((item)=> {return item > 5})
console.log(num);

const myArr = [
    {
        Name: 'ajay',
        Degree: 'Bca'
    },
     {
        Name: 'Vikash',
        Degree: 'Bcom'
    },
     {
        Name: 'Ashish',
        Degree: 'Btech'
    }
]
const filterdata=myArr.filter((val)=> val.Degree === 'Btech')
console.log(filterdata);

myArr.forEach((i)=>{
    if(i.Degree==='Bcom'){ // forEach Do not return any value
// console.log(i);
    }
})

const NewArray = [1,2,3,4,5,6,7,8,9,10]
let newValue = NewArray.map((key)=>key*10) //map is used to perform operation
console.log(newValue);
const newValue1 = NewArray.filter((value)=> value==10) //filter is used only filter any value we can't perform any operation
console.log(newValue1);

newValue = NewArray.map((key)=>key*10).map((key)=>key+1)
console.log(newValue);

//-------------Reduce------------------
const myNum = [1,2,3,4]
const totalNum=myNum.reduce((acc,currval)=>(acc+currval),0)
console.log(totalNum);

const shoppingCart = [
    {
        itemName: 'Fan',
        Price: 1099
    },
    {
        itemName: 'AC',
        Price: 10099
    },
    {
        itemName: 'fridge',
        Price: 12999
    },
    {
        itemName: 'almira',
        Price: 5999
    },
]
const totalCartValue =shoppingCart.reduce((acc,item)=> acc + item.Price,0)
console.log(`total Cart Value: ${totalCartValue}`);

