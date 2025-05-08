//---------singleton and constructor-------------//
const tinderUser = new Object()  // Declear object using singleton and constructor
// console.log(tinderUser)

//Nexted object

const user ={
    email: 'ajaynegi@gmail.com',
    FullName : {
        firstName: {
            firstName: 'ajay',
            lastName: 'Negi'
        }
    
    }
}

// console.log(user.FullName.firstName.firstName);

//merge 2 object together

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}
const obj3 = {5:'a',6:'b'}

const obj4 = Object.assign({},obj1,obj2,obj3) // first way of merging
// console.log(obj4);

const obj5 = {...obj1,...obj2,...obj3} // 2nd way using spread operator
// console.log(obj5);

//---Extracting of value and keys----

// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))

// console.log(obj1.hasOwnProperty('a'))

// object destructure
const cource = {
    courceName : 'Web Development',
    price: 299,
    courceInstructor: 'Ajay Negi'
}

// console.log(cource.courceInstructor)  // simple print to value

const {courceInstructor : instructor} = cource
// console.log(instructor)

// Create an object for a contact card
const contactCard = {
    name: "Ajay Negi",
    phone: "123-456-7890",
    email: "ajay@example.com",
    address: "123 Main Street, New Delhi",
    showDetails: function() {
        // console.log("Contact Details:");
        // console.log("Name: " + this.name);
        // console.log("Phone: " + this.phone);
        // console.log("Email: " + this.email);
        // console.log("Address: " + this.address);
    }
};

// Call the method to display the details
contactCard.showDetails();

const ContactCard2 ={
    Name: 'Ajay Negi',
    myPhone: 725457545,
    email: 'ajay@gmail.com',
    Location : 'delhi',
    birthDay : '10/06/2000',
    ShowDetails2: function(){
        console.log(`your Name: ${this.Name}`);
        console.log(`phone: ${this.myPhone}`);
        console.log(`Email: ${this.email}`);
        console.log(`Loaction: ${this.Location}`);
        console.log(`birthDay: ${this.birthDay}`);

    },

    UpdatePhone: function(Newphone){
        this.phone = Newphone
        console.log("Phone number updated to: " + this.phone);    }

}

ContactCard2.ShowDetails2()
ContactCard2.UpdatePhone(999013544)
ContactCard2.ShowDetails2()