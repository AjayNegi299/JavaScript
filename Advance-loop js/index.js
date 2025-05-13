//High order array loop

//for of

const arr = [1,2,3,5,6,4,8] //with array
for (const num of arr) {
    // console.log(num)
}

//For of with string
const greeting = 'Hello World!'
for (const greet of greeting) {
    if (greet  == " "){
        // console.log("Space Detected");
        break
    }
    // console.log(greet);
}




//map 

const map = new Map()
map.set('INR','india')
map.set('Doller','USA')
map.set('Pounds','Austerlia')

for (const [key , values] of map) {
//    console.log(key ,'->',values); 
}


//ForIn- this loop is used to iterate the object eg-
const myobj ={
    Name : 'ajay',
    cource : 'development',
    duration: '6 Months'
}
for (const key in myobj) {
//    console.log(key, 'value is:',myobj[key]);
}


const mymap = new Map()
mymap.set('INR','india')
mymap.set('Doller','USA')
mymap.set('Pounds','Austerlia')

for (const [key,value] in mymap) {
    console.log(key,value); // we cant use forIn in map
}


//-----------For Each---------

const coding = ['javascript','Java','CPP','Python']
coding.forEach(function (item){        //Method one
    // console.log(item);
})

coding.forEach((val)=>{
    // console.log(val);
})

function sayHi(key){
    // console.log(key);
}
coding.forEach(sayHi)

//------ForEach with object

const myCoding = [
    {
        languageName : 'JavaScript',
        LanguageExtension:'js'
    },
    {
        languageName : 'Java',
        LanguageExtension:'java'
    },
    {
        languageName : 'python',
        LanguageExtension:'py'
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})