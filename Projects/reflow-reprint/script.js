//code 1
const t1 = performance.now()
for (let i = 1; i<=100;i++){
    const para = document.createElement('p')
    para.textContent = 'this is para' + i
    document.body.appendChild(para)
}
const t2 = performance.now()
console.log(`total running time: code 1: `+ (t2-t1));


//code 2
const t3 = performance.now()
const mydiv = document.createElement('div')
for (let i = 1;i<=100;i++){
    const para = document.createElement('p')
    para.textContent = 'this para is '+i
    mydiv.appendChild(para)
}
document.body.appendChild(mydiv)
const t4 = performance.now()
console.log(`total running time: code 2: `+ (t4-t3));

