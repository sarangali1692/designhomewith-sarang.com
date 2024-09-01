
const images = document.querySelectorAll('.image-container img');

// Loop through all images and apply the click event listener
images.forEach(image => {
    image.addEventListener('click', function() {
        // Toggle between original size and increased size
        if (image.style.width === '200px'&&
            image.style.height==='200px'
        ) {
            image.style.width = '400px';
            image.style.height = '400px'; // Increase size
        } else {
            image.style.width = '200px';
            image.style.height='200px'; // Revert to original size
        }
    });
});



