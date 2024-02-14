
// var c = 300

if(true){
    //There is a scope inside this curly braces 
    //the objects created in this scope cant exist outside
    let a = 10
    const b = 20
    // var c = 30

}

// console.log(a)//now a   is not possible to prinit because its inside the scope of if as we cant access elements outside of scope without functions and objects
// console.log(b)//same problem as above
// console.log(c) //But this will get print as var does not follow any scopes so if another var is created outside the scope the the var will be ovveriten as we will not get the value properly

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++




function addone(num){
    return num + 1
}

console.log(addone(5))




const addTwo = function(num){
    return num + 2
}
addTwo(5)
