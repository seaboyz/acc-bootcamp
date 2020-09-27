2
// var starsName = star.getName; 
// when is runs javascript engine asigns start.getName(function(){return this.knownAs}) to starsName. 
// starsName() execute the funtion, "this" points to the global object and there is no "knownAs" property, so it rerurns undefined

// "star.getName" is the method of the "star" object, when it is executed, "this" points to the object the methods live in, which is the star object. "this.knowAs" equals "Julia Roberts", so star.getName() returns "Julia Robers"


// Perfect!! - 3pts