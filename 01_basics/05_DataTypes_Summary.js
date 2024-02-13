// Primitive Data Types (call by value hoteh hai, you dont get the original memory when you call you get its copy not exact)

// 7 Types : Striing , Number , Boolea , NULL ,  Undefined, Symbol-to make any values unique, BigInt-Very big int can be handles


//JavaScript is Staticlly Typed Dynamically Typed

//Reference Type (Or Non - Primitive Data types , You get the Memory reference Directly not the copy)

// Array , Objects, Functions

// Lets Check on Symbol

const Id = Symbol('123')
const anotherId = Symbol('123')
//=== used to check the datatypes and the values also
console.log(Id === anotherId);