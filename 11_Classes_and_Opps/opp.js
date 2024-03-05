const user = {

    //Properties
    username : "Tushankar" , 
    loginCount : 8,
    SignedIn : true ,

    //methods
    getUserDetails : function(){
        // console.log("Got user details from database()");
        // console.log(`Username : ${username}`);//it will give username undefined as it deosnot know kaunsi username ki baat horahi hai
        console.log(`Username : ${this.username}`);
    }
    //This->keyword means current context
}


console.log(user.username);
console.log(user.getUserDetails());

const promiseOne =  new Promise()
const date = new Date()

function user(username, loginCount, isLoggedIn)
{
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this//we passed the object
}

const userOne = user("hitesh", 12, true)
const userTwo = user("ChaiAurcode", 11, false)//when we print again
//the userone it the value of hitesh 12 true gets overriten with usertwo

console.log(userOne);//we dont print usertwo but still overritesss

//for this we use constructor function which gives us new instances for which others dont get affected by using new keyowrd

const userOne1 = new user("hitesh", 12, true)
const userTwo2 = new user("ChaiAurcode", 11, false)

console.log(userOne1);
console.log(userTwo2);

