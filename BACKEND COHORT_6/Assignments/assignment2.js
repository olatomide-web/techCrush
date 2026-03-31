
const str = "Nigeria is awesome";
let extractNigeria = str.substring(0,7)
console.log(extractNigeria)

let extractAwesome = str.slice(11,18)
console.log(extractAwesome)

const names = "John, Jane, Doe";
let splitnameArray = names.split(",")
console.log(splitnameArray)

let joinnameArray = names.split(" ")
console.log(joinnameArray)

const path = "/user/home/docs";
let splitPath = path.split("/")
console.log(splitPath)

let getHome = path.split("home")
console.log(getHome)

let getHomeIndex = path.indexOf("home")
console.log(getHomeIndex)

const email = "user@example.com";
let getUsername  = email.split(0,4)
console.log(getUsername)

let endwith = email.endsWith(".com")
console.log(endwith)

let replaceAt = email.replace("@", "AT")
console.log(replaceAt)
