let animals = require('animals')
let Log = require('log.pets')

// console.log(animals())

// Log.lion()

// Log.zoo(animals(), animals(), animals())

// console.log(animals.words.length)

console.log( 
    animals.words.filter(name => name[0] === "G").length || 
    "No matches found"
    )