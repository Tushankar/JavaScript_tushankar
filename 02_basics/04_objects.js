//const tinderUser = new Object()//this is also object this is single ton object
const tinderUser = {} //This is not a single ton object


tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//nesting of objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname : {
            firstName: "Tushankar",
            lastName: "saha"
        }
    }
}

// console.log(regularUser.fullname)
//console.log(regularUser.fullname.userFullname)



//colning of object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} generates output like array
// const obj3 = Object.assign({}, obj1, obj2) //2nd bracket is optional paranthesis obj assign copyu one or more object to target object first one is
//  target 2nd one is source if we have more values so we take empty box so first {}
//  is target and the other is source otherwise all the values will go to object 1 or first target 


// or we can use spread operater
const obj3 = {...obj1, ...obj2}
console.log(obj3);


// when we get values from database

const users = [
     //array of objects will come
    {
        id: 1,
        email:"h@gmail.com"
    }
    ,
    {
        id: 2,
        email:"T@gmail.com"
    }
    

]
//i want to acces the first value of this as it is a object we 
//will use the dot operation
users[1].email



console.log(tinderUser)
//we can get all the keys which actually works in database management 
//we can also find the values also entries
console.log(Object.keys(tinderUser));










