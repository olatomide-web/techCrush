//using the map method, create a new array where each number is doubled
const number = [1,2,3,4,5]
let doubleNumber = number.map(function(double){
    return double * 2
})
console.log(doubleNumber)

//return scores greater than or equal to 300
const scores = [250, 300, 350, 200, 400, 180, 160];
let greaterScore = scores.filter((greater) =>{
    return greater >= 300;
})
console.log(greaterScore)

//get me sum of all items in the array
const sum = [2000, 3000, 400, 100, 600]
let totalSum = sum.reduce((accumulator,total) => {
    return accumulator + total;
},0)
console.log(totalSum)

//add green to the end of the array and remove red from the array
const colors = ["blue", "yellow", "red"]
let addColor = colors.unshift("green");
console.log(colors)

let removeColor = colors.pop()
console.log(colors)