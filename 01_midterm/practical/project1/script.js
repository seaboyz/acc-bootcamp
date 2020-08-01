let lbs = document.getElementById("lbsInput");
let kg = document.getElementById("kgInput");
let miles = document.getElementById("milesInput");
let km = document.getElementById("kmInpunt");

lbs.addEventListener("keyup", function() {
    kg.value = (lbs.value * 0.45).toFixed(3)
})
kg.addEventListener("keyup", function() {
    lbs.value = (kg.value * 2.2).toFixed(3)
})
miles.addEventListener("keyup", function() {
    km.value = (miles.value * 1.6).toFixed(3)
})
km.addEventListener("keyup", function() {
    miles.value = (km.value * 0.62).toFixed(3)
})
