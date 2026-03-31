const customerName = "Aborisade Olatomide";
let customerAge = 12;
let bookTitle = "There was a country";
let bookPrice = 5400;
let quantity = 4;
let isStudent = true;
const totalPrice = bookPrice * quantity

let isAdult = customerAge >= 18
let buyingManyBooks = quantity >= 3
let isBookFiveThousand = bookPrice === 5000;

let customerOrder = {
    customerName : `${customerName}`,
    bookTitle : `${bookTitle}`,
    quantity : `${quantity}`,
    totalPrice : `${totalPrice}`,
};
console.log(customerOrder)

console.log(customerName)
console.log(bookTitle)
console.log("total price: " + totalPrice)
console.log("is customer an adult?: " + isAdult)
console.log("is customer buying more than 3 books?: " + buyingManyBooks)
console.log("is book price 5000?: " + isBookFiveThousand)

