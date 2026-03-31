//QUESTION 1
const str = "Nigeria is awesome";

let extractNigeria = str.substring(0,7)
console.log(extractNigeria)

let extractAwesome = str.slice(11)
console.log(extractAwesome)

let getIs = str.slice(8,10)
console.log(getIs)

//QUESTION 2
const names = "John, Jane, Doe";
let splitnameArray = names.split(",")
console.log(splitnameArray)

let joinnameArray = names.trim(" ")
console.log(joinnameArray)

const path = "/user/home/docs";
let splitPath = path.split("/")
console.log(splitPath)

let getHome = path.split("/")[2]
console.log(getHome)

let getHomeIndex = path.indexOf("home")
console.log(getHomeIndex)

//QUESTION 3

const email = "user@example.com";
let getUsername  = email.split(0,4)
console.log(getUsername)

let endwith = email.endsWith(".com")
console.log(endwith)

let replaceAt = email.replace("@", "AT")
console.log(replaceAt)

