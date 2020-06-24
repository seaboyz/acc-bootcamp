function name(){
    var name = prompt("Please enter your name.");
    return alert("You are going to have a wonderful day, " + name + ".")
};
name();

function sum(){
    var number1 = Number(prompt("Give me a number."));
    var number2 = Number(prompt("Give me another number."))
    sum = number1 + number2
};
message = ("By the way, the sum of your numbers is " + sum + ".");

document.getElementById("p1").textContent = message;

