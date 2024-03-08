// Sabse pehle Ghar par aao
// Gate Kholo aur gate lagao
// Khana pakao khana khao
// Incongito mode chalao
// Sojao kyuki Mode chalao

//To run them syncronaxly


var ans = new Promise(function (res, rej) {
    return res("Sabse pehle Ghar par aao")
})

var p2 = ans.then(function(data){
    console.log(data);

    return new Promise((res, rej) => {
        return res(" Gate Kholo aur gate lagao")
    }) 
})

var p3 = p2.then(function(data){
    console.log(data);

    return new Promise((res, rej) => {
        return res("Khana pakao khana khao")
    })
})

var p4 = p3.then(function(data){
    console.log(data);

    return new Promise((res, rej) =>{
        return res(" Incongito mode chalao")
    })
})

var p5 = p4.then(function(data){
    console.log(data);

    return new Promise((res, rej) =>{
        return res(" Sojao kyuki Mode chalao")
    })
})