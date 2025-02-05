const images=["Developer-1.jpg","Developer-2.jpg","Developer-3.jpg","Developer-4.jpg","Developer-5.jpg","Developer-6.jpg","Developer-7.jpg","Developer-8.jpg"];
let currentIndex = 0; // Track the current image index
let slideshowInterval; // Store the slideshow interval ID


function updateImage() {
    const galleryImage = document.getElementById("galleryImage");
    galleryImage.src = images[currentIndex];
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first image
    }
    updateImage();
}

function previousImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Loop back to the last image
    }
    updateImage();
}

function startSlideshow() {
    stopSlideshow(); // Stop any existing slideshow
    slideshowInterval = setInterval(nextImage, 600); 
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

// Initialize the gallery with the first image
updateImage();
