function getData(dataid,getnextdata){
    setTimeout(function(){
    console.log('data: '+ dataid);
    if(getnextdata){
        getnextdata()
    }
    },2000)
    
}
getData(1,()=>{
    console.log('Loading 2 data.....');
    getData(2,()=>{
    console.log('Loading 3 data.....'); 
    getData(3)
    })
})