var btn = document.querySelector("input[type='submit']")
var msg = document.querySelector("#message")


btn.onclick = function(){
   
   var firstNum = document.getElementById("first").value
   var secondNum = document.getElementById("second").value
   let answer = multiply(firstNum, secondNum)
   msg.innerText = `The answer is ${answer || ''}`
}

const multiply = function(a, b) {
   return a * b
} 
