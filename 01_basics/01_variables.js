const accountId = 12333
let accountEmail = "sahatushankar234@gmail.com"
var accountPassword = "12345678"
accountCity = "jaipur"

// accountId = 124 not allowd var is not preffered in javascrip
accountEmail = "tushankarSaha0@gmail.com"
accountPassword = "87654321"
accountCity = "Kolkata"
/*
Prefer not to use var because of isseus in variable scoping as it doesnot maintain the scope
so if people change the var in other files it gets changed in the other var keywords memory allocations also
*/

// if we are writing const keyword we cant change the variable data again 
console.table([accountId, accountEmail, accountPassword, accountCity]);