const myarray = [1,2,3,4,5,6,7]
console.log(myarray[3]);

//we can clear also
const newArray = new Array(1,2,5,4,3)
console.log(newArray);


//------array Methods----------

const updateArray = new Array(5,2,46,4,8,5,2)
//Push
updateArray.push(9)
console.log(updateArray)
//pop
console.log(updateArray.pop())
//include
console.log(updateArray.includes(9))
//indexOf
console.log(updateArray.indexOf(3))
//join
console.log(updateArray.join())

//concat
const anotherArray = updateArray.concat(newArray)
console.log(anotherArray)

// spead ...
const newAnotherArray = [...anotherArray, ...myarray]
console.log(newAnotherArray);

//from
const arrayMethod = Array.from('ajay')
console.log(arrayMethod)

//of
const score =200
const score1 =200
const score2 =200

console.log(Array.of(score,score1,score2));