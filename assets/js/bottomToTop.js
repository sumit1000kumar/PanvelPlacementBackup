window.addEventListener('scroll', function () {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    // Show scroll-to-top button if user scrolls down 200 pixels from the top
    var scrollBtn = document.querySelector('.scroll-to-top');
    if (scrollPos > 200) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

// Smooth scroll to top when button is clicked
document.querySelector('.scroll-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});