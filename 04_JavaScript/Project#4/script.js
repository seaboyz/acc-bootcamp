// testing
// alert("Hello World!")

var bgImages = document.getElementsByClassName("bg");
var imageIndex = 0;
function rotatingBackground() {
    // turn off all background images display
    for (var i = 0; i < bgImages.length; i++) {
        bgImages[i].style.display = "none";
    }
    // turn background image display from none to dispaly
    bgImages[imageIndex].style.display = "block";

    imageIndex++;
    // when imageIndex reaches bgImages number, reset it to 0
    if (imageIndex > bgImages.length) {
        imageIndex = 0;
    }
}
// run function without waiting 2000ms
rotatingBackground();
// after first run, wait 2000ms , then sencond run
setInterval(rotatingBackground, 2000);
