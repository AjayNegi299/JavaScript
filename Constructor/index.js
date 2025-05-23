function car(make,year,name,price){
this.make = make
this.year = year
this.name = name
this.price = price
}

const car1 = new car('India',2015,'Maruti T20',750000)
console.log(car1.make);
console.log(car1.year);
console.log(car1.name);
console.log(car1.price);