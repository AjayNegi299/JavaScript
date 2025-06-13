const str = 'javaScript'
const vowel = ['a','e','i','o','u']
let count = 0

for(let i = 0; i<str.length ;i++){  //
    let char = str[i].toLowerCase()
    if(vowel.includes(char)){
        count++
    }

}
console.log(count);