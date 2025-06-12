function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('Data: ',dataId);
        resolve("success")
    },2000)
    })   
}

 async function getAlldata(){
    console.log('Loading data 1.......');
    await getData(1)
    console.log('Loading data 2.......');
    await getData(2)
    console.log('Loading data 3.......');
    await getData(3)
    console.log('Loading data 4.......');
    await getData(4)
}

