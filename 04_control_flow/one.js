//if statement

if(true){
    //we will execute
}

if(false){
    //code will not execute
}

const isUserLoggedIn = true;
if(isUserLoggedIn){

}

//<,>,<=,=>,!=, ===(also check the type like if 2==="2" it wil check they came from the same reference or dataTypes or not same type ),

const temperature = 41

if(temperature < 50){
    console.log("less than 50");
}
else{
    console.log("Temperature is greater than 50")
}


const score = 200;

if(score > 100){
    const power  = "fly"
    console.log(`User Power: ${power}`)
}


const balance = 1000;

if(balance > 500) console.log("test");//implicit scope cant write multiple here wuthout comas but it becomes immature 

//Nesting
if(balance < 500){
    console.log("less than 500")
}

else if(balance <750) {
    console.log("Less than 750")
}
else if(balance <900) {
    console.log("")
}



