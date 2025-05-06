const myDate = new Date('3')
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toTimeString())


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myDate.getTime())
console.log(myDate.getDay());

const newDate = myDate.toLocaleString('Default',{
    weekday:'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
})
console.log(newDate);