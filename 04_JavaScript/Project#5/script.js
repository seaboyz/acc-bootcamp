var images = document.getElementsByTagName('img');
var imageIndex = 0;
function nextImage() {
    // turn off all image display
    for(var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    imageIndex++;
    if (imageIndex > images.length) {
        imageIndex = 1;
    }
    images[imageIndex - 1].style = 'block'

}
function prevImage() {
    // turn off all image display
    for(var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    imageIndex--;
    if (imageIndex < 1) {
        imageIndex = images.length;
    }
    images[imageIndex - 1].style = 'block'

}
// show only first image
nextImage();
