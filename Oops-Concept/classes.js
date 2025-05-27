class product{
constructor(name,price){
    this.name = name
    this.price = price
}
displayClass(){
    console.log(`product: ${this.name}`);
    console.log(`price: ${this.price}`);
}
}
const product1 = new product('Dell Laptop',45000)
product1.displayClass()