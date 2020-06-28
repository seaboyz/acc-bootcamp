// testing
// alert("Hello World!")
// turn off all background images display
var bgImages = document.getElementsByClassName('bg');
var imageIndex = 0;
function rotatingBackground() {
    for (var i = 0; i < bgImages.length; i++) {
        bgImages[i].style.display = 'none';
    }
    imageIndex++;
    if (imageIndex > bgImages.length) {
        imageIndex = 1;
    }
    bgImages[(imageIndex - 1)].style.display = 'block';
}
rotatingBackground();
setInterval(rotatingBackground, 2000);

