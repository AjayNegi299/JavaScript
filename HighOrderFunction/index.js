const side = [2,5,3,4,6]

const area = function(side){
    return side * side
}

const perimeter = function(side){
    return 4 * side
}

const Volume = function(side){
    return (side * side) + side
}

const calculate = function(side,logic){
    const output = []
    for (let i = 0; i < side.length; i++) {
         output.push(logic(side[i]))
    }
    return output
}

console.log(side.map(area))
console.log(calculate(side,area));
console.log(calculate(side,perimeter));
console.log(calculate(side,Volume));

/* 
own build in method
Array.prototype.calculate = function(logic){
    const output = []
    for (let i = 0; i < this.length; i++) {
         output.push(logic(this[i]))
    }
    return output
}

console.log(side.calculate(area))
*/

