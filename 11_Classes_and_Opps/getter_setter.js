class user {

    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    //email is setting values on the constructor but  the 
    //but we have overriten the password so it is setting 
    //or getting the values from getters and setters here
    set password(value){
        this._password = value;
    }

    get password(){
        return `${this._password}tushankar`
    }   
  
}

const hitesh = new user("T@Saha.ai.py", "abc")
console.log(hitesh.password);