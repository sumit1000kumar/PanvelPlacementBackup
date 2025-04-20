document.addEventListener('DOMContentLoaded', function() {
    const backgrounds = document.querySelectorAll('.hero-background');
    let currentIndex = 0;
    
    // Set first background as active
    backgrounds[currentIndex].classList.add('active');
    
    // Rotate backgrounds every 4 seconds
    setInterval(() => {
        backgrounds[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % backgrounds.length;
        backgrounds[currentIndex].classList.add('active');
    }, 4000);
});