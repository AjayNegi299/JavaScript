// function getData(dataid,getnextdata){
//     return new Promise((resolve,reject)=>{
//       setTimeout(function(){
//     console.log('data: ',dataid);
//     resolve("success")
//     if(getnextdata){
//         getnextdata()
//     }
//     },7000)
//     })
// }
// getData(123)

// const getPromise = () =>{
//     return new Promise((resolve, reject)=>{
//     console.log("This is my promise");
//     // resolve("sucess")
//     reject('memory error')
// });
// };

// let promise = getPromise()
// promise.then((res)=>{
//     console.log('Success');
// })

// promise.catch((err)=>{
// console.log('Error');
// })

// ---------------- Promise Chaining -----------------
function getdata(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data: ", dataId);
      resolve("success");
    },2000);
  });
}

console.log("fetching data1......");
getdata(1).then((res) =>{
    console.log("fetching data2......");
  return getdata(2).then((res) =>{
    console.log("fetching data3......");
    return getdata(3).then((res)=>{
        console.log(res);
    })
  });
});
