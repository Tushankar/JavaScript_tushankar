function User(email, password){
    this._email = email;
    this._password = password;

    //function is also object so , here the define property is the property of getters and setters
    //we have given their own this to them and we said to overrite the email propery here
    Object.defineProperties(this, 'email', {
     
        get: function(){
           return this._email.toUpper
        },
        set: function(value){
            this._email = value;
        }

    })

    Object.defineProperties(this, 'password', {
     
        get: function(){
           return this._password.toUpper
        },
        set: function(value){
            this.password = value;
        }

    })
}

const chai = new User("Chai@chai", "chai")
console.log(chai.email);