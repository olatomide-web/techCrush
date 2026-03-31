//lenght of a string
let stringText = "This is a class on string method"
// let array = ["olatomide", "this is a class"]
// console.log(stringText.length)
// console.log(array.length)

// let capitalLetter = stringText.toUpperCase()
// console.log(capitalLetter)

// let smallLetter = "OLATOMIDE ABORISADE"
// console.log(smallLetter.toLowerCase())

// let str = " hello world "
// let trimedStr = str.trim()
// let frontTrimedstr = str.trimStart()
// let endTrimedStr = str.trimEnd()

// console.log(trimedStr)
// console.log(frontTrimedstr)
// console.log(endTrimedStr)

let userEmail = "joshboris2020@gmail.com"
let emailIndex = userEmail.indexOf("@") //returns number
console.log(emailIndex)

// let userEmail = "joshboris2020@gmail.com"
// let emailIndex = userEmail.includes("@") //returns boolean
// console.log(emailIndex)

// let userName = "techcrush Olatomide 6"
// let starts = userName.startsWith("techcrush")
// console.log(starts)

//slice and substring

// let testString = "my name is Olatomide"
// let slicedString = testString.slice(-9)
// console.log(slicedString)

// let testString = "my name is Olatomide"
// let slicedString = testString.substring(0,9)
// console.log(slicedString)

//replace and replace all
let text = "Olatomide is a software engineer. Olatomide is a gym bro. Olatomide eats a lot"
let replaceText = text.replace("Olatomide", "He")
let replaceAllText = text.replaceAll("Olatomide", "He")

console.log(replaceText)
console.log(replaceAllText)

classwork
const msg = "HELLO WORLD"
let trimMsg = console.log(msg.trim())
let startsMsg = console.log(msg.endsWith("WORLD"))
let lowercaseMsg = console.log(msg.toLowerCase())

let postionMsg = console.log(msg.indexOf('WORLD'))
let replaceMsg = console.log(msg.replace("WORLD", "NIGERIA"))
let replaceL = console.log(msg.replaceAll("L", "I"))
let slicMsg = console.log(msg.slice(3,8))

let example = "he is a boy, he is a software engineer, he loves food";
console.log(example.split("he"))

const example2 = "Languages: Javascript, python, c++, php"
let splitSentence = example2.split("")
console.log(splitSentence)