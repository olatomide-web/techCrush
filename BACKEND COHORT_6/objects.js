let obj = {
    name : "Olatomide",
    age : 25,
    profession : "Software Engineer",
}
let student = {
    name : "Aborisade Olatomide",
    age : 24,
    department : "Software Engineering",
    isEnrolled : true,
    Faculty : "Natural & Applied Science",
}

console.log(student.name);
console.log(student.age)

// console.log(student["name"]);
// console.log(student["age"])

let newName = student.name
let newAge = student.age

const {name, age} = student
console.log(name)
console.log(age)

const courses = {
    csc101 : "Data Structure",
    phy101 : "Intro to mechanics"
}

let {csc101 : csc111} = courses
console.log(csc111)
console.log(courses)

const person = {
    name : "Olatomide",
    opay : true,
}
console.log(person)
let {opay : palmpay} = person
console.log(palmpay)

//spread operator
let profile = {name : "Olatomide", age : 24};
let updatedProfile = {
    ...profile,
    city : "Ibadan",
    university : "lead city university",
}
console.log(updatedProfile);