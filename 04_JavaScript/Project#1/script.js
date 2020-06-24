// alert("hello world");
var name = prompt("Please enter your name.");
var snack = prompt("What's your favorate snack?");
var drink = prompt("What's your favorate drink?");

// var welcomeMessage = "Hi there " + name + "," + " it seems that you enjoy eating " + snack + " and drinking " + drink + "!"

// document.getElementById("p1").textContent = welcomeMessage;

// Template literals (Template strings)
document.querySelector('#p1').innerHTML = `Hi there ${name}, it seems that you enjoy eating ${snack} and drinking ${drink}!`