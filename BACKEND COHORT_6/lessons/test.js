let str = "coding is fun";
//extract the word coding

let strCoding = str.slice(0,6);
console.log(strCoding)

let strFun = str.substring(10);
console.log(strFun)

let strIs = str.slice(7,9);
console.log(strIs)

//challenge 2
const colors = "red, green, blue, yellow";
let comma = colors.split(",");
console.log(comma)

let joined = comma.join(" - ")
console.log(joined)

console.log("Aborisade Olatomide Joshua".split('').join(""))

//challenge 3
const url = "/api/v1/users";
let slash = url.split("/")
console.log(slash[2])

//challenge 4
const matricNumber = "TECHCRUSH-OLATOMIDE-2026";
let splitMatric = matricNumber.split("-")
console.log(splitMatric[1])