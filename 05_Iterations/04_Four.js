//forin

const myObject = {
    js : 'JavaScrip',
    cpp : 'C++',
    rb : 'ruby'
}

for (const key in myObject) {
   console.log(myObject[key]);
   console.log(`${key} Shortcut is for ${myObject[key]}`)
}

const programming = ["js", "ruby", "py", "java"]

for (const key in object) {
    console.log(key)
    console.log(programming[key]);
}

const map = new Map()
//maps holds key value pair
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('Fr', "France")
//This map is not iteratable thats why we cant work with for in loops
console.log(map);
for (const key in map) {
    console.log(key);
}

//for each loop