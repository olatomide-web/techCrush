// let items = ["beans", "rice", "oil", 1, true]
// console.log(items[2])
// console.log(items.length)
 
//forEach 

// let fruits = ["watermelon", "apple", "orange", "banana"]
// fruits.forEach(function(fruit){
//     console.log("i eat " + fruit)
// })

// let names = ["nonso", "tomide", "ibrahim", "tunde"];
// names.forEach(function(name){ //arrow function
//     console.log("hello " + name)
// })

// //map method
// let scores = [90, 80, 75, 30, 40];
// let newScores = scores.map(score => {
//     return score + 5
// }) //arrow function
// console.log(newScores)

// let students = ["olatomide", "moses", "feyisara"]
// let nameTag = students.map(tag =>{
//     return "TECHCRUSH_2026" + tag
// })
// console.log(nameTag)

// let students = ["olatomide", "moses", "feyisara"]
// let nameTag = students.map(function(student_name){
//     return "TECHCRUSH _2026" + student_name
// })
// console.log(nameTag)

//filter method
// let jambScores = [200, 340, 170, 120, 60]
// let passed = jambScores.filter((score)=>{
//     return score >=200
// })
// console.log(passed)


// let ages = [18, 25, 17, 43, 12]
// let adult = ages.filter(function(age){
//     return age >= 18
// })
// console.log(adult)

// const studentNames = ["tomide", "feyisara", "Christabel", "tomide", "moses"];
// let found = studentNames.find(name => {
//     return name === "Tomide".toLocaleLowerCase();
// })
// console.log(found)

//reduce method
// let cartPrices = [1500, 2000, 430, 2000]

// let total = cartPrices.reduce(function(accumulator, currentPrice){
//     return accumulator + currentPrice;
// },0);//accumulator, current value, initial value

// console.log(total);

// //using arrow function
// let grandTotal = cartPrices.reduce((acc,price) => {
//     return acc + price;
// },0);
// console.log(grandTotal)

//push, pop, shift, unshift
let colors = ["red", "yellow", "blue"]
colors.push("pink")//adds to the array
console.log(colors)

let lastColor = colors.pop()//removes the last item
console.log(colors)

let firstColor = colors.unShift()//removes the first item
console.log(colors)


