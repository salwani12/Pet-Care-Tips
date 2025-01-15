// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            event.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dropdown hover behavior
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.classList.add('show');
            dropdown.querySelector('.dropdown-menu').classList.add('show');
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdown.classList.remove('show');
            dropdown.querySelector('.dropdown-menu').classList.remove('show');
        });
    });
});

// Search form validation
document.getElementById('searchForm').addEventListener('submit', (event) => {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
        event.preventDefault(); // Prevent form submission if query is empty
        alert('Please enter a search term.');
    }
});

// Initialize the carousel manually (optional, if not using data attributes)
document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('#carouselExampleCaptions');
    if (carouselElement) {
        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 1000, // Set autoplay interval to 1 seconds
            pause: 'hover', // Pause on mouse hover
            wrap: true, // Enable infinite looping
            ride: 'carousel', // Automatically start sliding on page load
        });

        // Add event listeners for slide change events (optional)
        carouselElement.addEventListener('slide.bs.carousel', (event) => {
            console.log(`Slide transition starting from ${event.from} to ${event.to}`);
        });

        carouselElement.addEventListener('slid.bs.carousel', (event) => {
            console.log(`Slide transition completed. Now on slide ${event.to}`);
        });

        // Programmatically navigate to the next or previous slide
        const nextButton = document.querySelector('.carousel-control-next');
        const prevButton = document.querySelector('.carousel-control-prev');
        
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                carousel.next(); // Go to the next slide
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                carousel.prev(); // Go to the previous slide
            });
        }
    }
});