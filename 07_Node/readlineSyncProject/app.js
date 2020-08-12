let readlineSync = require('readline-sync')

// part 1
// let userName = readlineSync.question('May I have your name? ')

// let favFood = readlineSync.question('What is your favorite food? ')

// let favDrink = readlineSync.question('What is your favorite drink? ')

// console.log(` “Hi ${userName}, your favorite food is ${favFood} and your favorite drink is ${favDrink}.”`)

// part 2
let spicy = ["spicy", "very spicy", "so spicy, you won't be able to feel your face"]

let spicyIndex = readlineSync.keyInSelect(spicy, "How spicy would you like your tacos?")

let yesOrNo = ["Yes", "No"]

let yesOrNoIndex = readlineSync.keyInSelect

let (`Ok, so you want your tacos to be ${spicy[spicyIndex]}. Are you sure about this?`)


