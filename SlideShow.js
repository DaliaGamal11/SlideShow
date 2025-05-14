var images = [
    "cat1.jpeg",
    "cat4.webp",
    "cat2.webp",
    "cat5.jpeg",
    "cat3.jpeg"
];
var currentIndex = 0;
var slideshowInterval;

function showImage(index) {
    var img = document.getElementById("imageDisplay");
    img.src = images[index];
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function showPrevious() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function startSlideshow() {
    stopSlideshow();//why ? create interval to solve bug 
    slideshowInterval = setInterval(showNext, 1000);
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}
