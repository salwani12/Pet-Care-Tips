// Top navigation
document.querySelectorAll('.side-nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = link.getAttribute('href'); // Get the target section ID
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Scroll to the target section smoothly
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Blog Post Dynamic Loading
const blogGrid = document.querySelector('.blog-grid');

const blogPosts = [
  { title: "Grooming Tips", image: "blog1.jpg", description: "Learn how to groom your pet effectively.", link: "#" },
  { title: "Healthy Diet", image: "blog2.jpg", description: "Discover the best diet for your pet.", link: "#" },
  { title: "Training Advice", image: "blog3.jpg", description: "Tips to train your pets.", link: "#" }
];


// Blog Section
// Load Blog Posts Dynamically
function loadBlogPosts() {
  blogPosts.forEach(post => {
    const card = document.createElement('div');
    card.classList.add('blog-card');
    
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      <a href="${post.link}">Read More</a>
    `;
    
    blogGrid.appendChild(card);
  });
}

loadBlogPosts();


// FAQs Section Functionality
document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('open');
        button.classList.toggle('active');

        // Close other collapsible sections
        document.querySelectorAll('.content').forEach(section => {
            if (section !== content) section.classList.remove('open');
        });

        document.querySelectorAll('.collapsible').forEach(otherButton => {
            if (otherButton !== button) otherButton.classList.remove('active');
        });
    });
});
