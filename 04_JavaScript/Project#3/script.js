var number1 = Number(prompt("Give a number."));
var number2 = Number(prompt("Give another number."));
var number3 = Number(prompt("Give a number again."));

var ar = [number1, number2, number3];

var i;
var sum = 0;

for (i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
};

message = "By the way, the sum of your numbers is " + sum + ".";

document.getElementById("p1").textContent = message;