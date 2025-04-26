document.addEventListener('DOMContentLoaded', function () {
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200; // The lower the faster

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const format = counter.getAttribute('data-format');
            let count = 0;

            const updateCount = () => {
                const increment = target / speed;
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 10);
                } else {
                    // Set final formatted value
                    if (format === "K") {
                        counter.innerText = Math.round(target / 1000) + "K+";
                    } else if (format === "plus") {
                        counter.innerText = target + "+";
                    } else {
                        counter.innerText = target.toFixed(1); // For rating like 4.8
                    }
                }
            };

            updateCount();
        });
    }

    // Intersection Observer to trigger when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const section = document.querySelector('.secure-placements');
    observer.observe(section);
});
