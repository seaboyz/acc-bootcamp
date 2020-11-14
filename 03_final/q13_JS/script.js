// Faulty Solution

function isIsogram(str){
    let strObj = {}          // here we track occurrence of each alphabet

    // don't care about case, convert to array and loop over it
    return str.toLowerCase().split("").forEach(
        function(letter) {
            if(strObj[letter]){  // testing strObj property for each unique letter
                return false     // if a repeat letter found, then not an isogram
            }
            strObj[letter] = true // if not found, then the property is set to true
        }
    )
    return true; 
}

var test = "Hello"

console.log(`test: ${isIsogram(test)}`)
