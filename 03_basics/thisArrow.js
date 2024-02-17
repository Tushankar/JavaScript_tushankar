const user = {
    username : "Tushankar",
    price: 999,

    WelcomeMessage: function() {
        //this create current context 
        console.log(`${this.username} , Welcome to website`);
    }
}

user.WelcomeMessage()
//if we change the username here
//it will get changed as we used this keyword jo bhi current context hai us context ke andar jo username ke value he woh print kardo here we change the context
user.username = "sam";
user.WelcomeMessage()


function chai(){
    let userName = "Hitesh"
    //We cant use this inside function
    console.log(this);
}

chai()


//Arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//implicit return 

const addTwo = (num1, num2) => num1+num2

console.log(addTwo(2,4));