
//Function defination
function sayMyName(){
  
    console.log("T");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("A");
    console.log("R");
}

// sayMyName()

// function addTwoNumbers(number1, number2 /*parameters*/){
//    console.log(number1 + number2)
// }

//If we give strings nums in arguments it will take as first one 
//is int then it will take 2nd one as int also
//if we pass null so for this ambuiguity not to happen we use if else case
// addTwoNumbers(10, 30 /*Arguments*/) 


function addTwoNumbers(number1, number2 /*parameters*/){
    
    // let result = number1 + number2
    // return result

    return number1 + number2
 }

const result = addTwoNumbers(3,5)
// console.log("Result: ", result)


function LoginUserMessage(username){
    if(username === undefined){
       console.log("Please enter a username")
       return
    }

    return `${username} Just logged in`
   
}

// console.log(LoginUserMessage("Tushankar"))
// console.log(LoginUserMessage())


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200))
// if cart is increaising as you are taking more and more and you have taken only one parameter
//To solve this we have rest or spread operator ... jitna item mila hai sabko bundle me pack karo aur dedo
//it will give array of these and add on more
console.log(calculateCartPrice(200, 400, 600))

const user = {
    userName: "Tushankar",
    Price: 199
}

function handleObj(AnyObj){
    console.log(`Username is ${AnyObj.userName} and price is ${AnyObj.Price}`)
}

handleObj(user)







