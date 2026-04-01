//QUESTION 1
// const number = [2,4,6,8,10]
// number.forEach(function(figure){ //arrow function
//     console.log(figure * 2 )
// })

//QUESTION 2
// const names = ["Esther", "John", "Ada", "Mike"];
// names.forEach(function(name){
//     console.log("Hello " + name)
// })

//QUESTION 3
// const numbers = [1, 2, 3, 4, 5];
// let squaredNumber = numbers.map(number => {
//     return (number ** 2)
// })
// console.log(squaredNumber)

//QUESTION 4
// const prices = [100, 200, 300];
// let discount = prices.map(price => {
//     return ((10/100) * price)
// })
// console.log(discount)

//QUESTION 5
// const numbers = [5, 12, 8, 20, 3];
// let newNumbersArray = numbers.filter(num => num > 10)
// console.log(newNumbersArray)

//QUESTION 6
const ages = [15, 22, 17, 30, 18];
let adultAge = ages.filter(age => age >= 18)
console.log(adultAge)

//QUESTION 7
const numbers = [10, 15, 20, 25, 30];
let numberAbove20 = numbers.filter(num=> num > 20)
let doubled_number = numberAbove20.map(num =>{
    return (num * 2)
})
console.log(doubled_number)