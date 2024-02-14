
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
console.log(LoginUserMessage())



