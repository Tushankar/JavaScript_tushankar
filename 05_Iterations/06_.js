// const coding = ["js", " ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) =>{
    
//     console.log(item);
//     //for each dpoes not return any values
//     //what if we have to return values?
// })


//in filter fuction we can give condition the conditions that will satisfy we can return them
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// //here i can give conditons for returning values
// const newNums = myNums.filter((num) => {
//     //if we dont write the nums inside the curly braces then we have to return it otherwise it will be implicit return 
//     return num > 4

// } )




// console.log(newNums)



//if you only used to work on forEach

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const Nums = []

// myNums.forEach( (num) =>{
//      if (num>4) {
//         Nums.push(num)
//      }
// })

// console.log(Nums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);




