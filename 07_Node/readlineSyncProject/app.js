let readlineSync = require('readline-sync')

let userName = readlineSync.question('May I have your name? ')

let favFood = readlineSync.question('What is your favorite food? ')

let favDrink = readlineSync.question('What is your favorite drink? ')

console.log(` “Hi ${userName}, your favorite food is ${favFood} and your favorite drink is ${favDrink}.”`)