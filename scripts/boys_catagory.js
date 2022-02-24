

var image = ["../boysphoto/slide1.jpg",
    "../boysphoto/slide2.jpg",
    "../boysphoto/slide3.jpg",
    "../boysphoto/slide4.jpg",
    "../boysphoto/slide5.jpg"];

var i = 0;
function slides() {
    document.getElementById("slider").src = image[i];
    if (i < image.length - 1) {
        i++;
    } else {
        i = 0;
    }
} setInterval(slides, 1300)
