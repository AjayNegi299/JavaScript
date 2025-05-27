// Synchronous


// Asynchronous
function one(bulao){
setTimeout(()=> {console.log('Task 4');
                             bulao()},5000)}

function two(){
console.log('Task 1');
console.log('Task 2');
console.log('Task 3'); 
}                             

one(two)