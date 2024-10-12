// Select the hamburger menu, navigation links, and the body
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const body = document.querySelector('body');

// Function to toggle the mobile menu
function toggleMenu() {
    // Toggle the 'nav-active' class to show/hide the navigation links
    navLinks.classList.toggle('nav-active');

    // Toggle the 'toggle' class to animate the hamburger icon
    hamburger.classList.toggle('toggle');

    // Toggle the 'no-scroll' class on the body to prevent background scrolling
    body.classList.toggle('no-scroll');
}

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', toggleMenu);

// Close the mobile menu after clicking on a navigation link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        // Close the menu by removing the active and toggle classes
        if (navLinks.classList.contains('nav-active')) {
            toggleMenu();
        }
    });
});

// Select all FAQ question buttons
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        // Toggle the active class to show/hide the answer
        item.classList.toggle('active');
        const answer = item.nextElementSibling;

        // Check if the answer is already expanded
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null; // Collapse
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px"; // Expand
        }

        // Rotate the arrow based on active state
        const arrow = item.querySelector('.arrow');
        if (arrow) {
            arrow.classList.toggle('active'); // Toggle arrow rotation
        }

        // Toggle the expanded class on the faq-section
        const faqSection = document.querySelector('.faq-section');
        if (item.classList.contains('active')) {
            faqSection.classList.add('expanded'); // Add expanded class
        } else {
            faqSection.classList.remove('expanded'); // Remove expanded class
        }
    });
});

