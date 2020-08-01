var firstNum = document.getElementById("first")
var secondNum = document.getElementById("second")
var btn = document.querySelector("input[type='submit']")
var msg = document.querySelector("#message")

btn.onclick = function(){
   let answer = multiply(firstNum, secondNum)
   msg.innerText = `The answer is ${answer || ''}`
}

const multiply = function(a, b) {
   console.log(a*b)
} 
