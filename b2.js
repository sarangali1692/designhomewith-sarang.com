document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const largeImage = document.getElementById('large-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseenter', () => {
            const largeImageUrl = thumbnail.getAttribute('data-large');
            largeImage.src = largeImageUrl;
        });
    });
});
