

(function rotatingBackground() {

    var bgImages = document.getElementsByClassName("bg");
    var imageIndex = 0;

    setInterval(function() {
        for (var i = 0; i < bgImages.length; i++) {
            bgImages[i].style.display = "none";
        }
        imageIndex++;
        // when imageIndex reaches bgImages number, reset it to 0
        if (imageIndex > bgImages.length) {
            imageIndex = 1;
        }
        // turn background image display from none to dispaly
        bgImages[imageIndex-1].style.display = "block";

        }, 1000);
       
}());


