//Immediately invoked function expression (iife)

// You write a function and you want to invoke it immediately

(function chai(){
    //named IIFE
    console.log("Database Connecyted")
})();//Invoked immediately to remove the pollution from the global scope we want this we have to end the so use semicolon

// chai() first code need s to end so we use semicolon

( (name) => {
    console.log(`Db is connected ${name}`)
})('Tushankar');

