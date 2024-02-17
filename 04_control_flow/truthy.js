const userEmail = "h@saha.ai" 

if (userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}


//falsy values

//false, 0, -0, BigInt 0n, "empty string", null, undefined, NaN

//Truthy values

// "0", 'false', " ", [], {}, function(){}

//Nullish Coalescing Operator

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10
val1 = undefined ?? 15 

console.log(val1); 

