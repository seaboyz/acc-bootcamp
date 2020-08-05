let marvel = require('marvel-characters')

// console.log(marvel())

list = marvel.characters

// console.log(list.length)

function startWithMan(name) {
    return name.slice(0,3) === "Man" 
} 
// returns true is the name starts with "Man"

function arrayStartWithMan(arr) {
    let newArr = arr.filter(startWithMan)
    if (newArr.length == 0) {
        console.log("There is no name starts with \"Man\".")
    } else {
        console.log(newArr)
    }
} // returns a array with the names start with "Man", or error message.

// arrayStartWithMan(list)

function isIronMan(name) {
    return name === "Iron Man"
}

function hasIronMan(arr) {
    let newArr = arr.filter(isIronMan)
    if (newArr.length === 0) {
        console.log("No Iron Man")
    } else {
        console.log(newArr)
    }
}

// hasIronMan(list)

function isBatman(name) {
    return name === "Batman"
}

function hasBatman(arr) {
    let newArr = arr.filter(isBatman)
    if (newArr.length === 0) {
        console.log("No Batman")
    } else {
        console.log(newArr)
    }
}

hasBatman(list)







