//------ForLoop ----

for (let i = 0; i < 10; i++) {
    const element = i
    // console.log(element);
    
}

//Nexted Loop

for (let index = 1; index <=10; index++) {
    console.log(`Outer Loop run: ${index}`);
    for (let i = 1; i<=10; i++) {
        // console.log(index + ' X '+ i + ' = '+ i*index);
        
    }
    // console.log(index);
    
}

//loop with array

const myArray = ['ajay','vijay','Ashish']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

//Break and Continue

for (let index = 1; index <= 20; index++) {
    if (index ==5) {
        console.log('5 Detected');
        break;
    }
   console.log(index); 
}

for (let index = 1; index <= 20; index++) {
    if (index ==5) {
        console.log('5 Detected and skip');
        continue;
    }
   console.log(index); 
}