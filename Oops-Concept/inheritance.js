class animal{
    alive = true
    eat(){
        console.log(`This ${this.name} is eat`);
    }
    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
}

class rabbit extends animal{
    name = 'rabbit'
}
class dog extends animal{
    name = 'dog'
}
const Rabbit = new rabbit()
console.log(Rabbit.alive);
Rabbit.eat();  
Rabbit.sleep();

const Dog = new dog()
Dog.eat();
Dog.sleep();