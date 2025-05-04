
// callback Funtion Example 1
const print = (a,b) => 
{
    let result = a * b
    console.log(result);

}
const test = (a,b, callback)=>{
    let result2 = a + b
    console.log(result2);
    callback(a,b);
}

test(15,16,print)

//Example 2

const print2 = (a,b) => 
    {
        let result = a * b
        console.log(result);
    
    }
    const test2 = (a,b)=>{
        let result2 = a + b
        console.log(result2);
        print2(a,b);
    }
    
    test2(15,16)
    
