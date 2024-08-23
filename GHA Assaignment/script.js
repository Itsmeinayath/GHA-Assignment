
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.toggle-icon');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.textContent = '+';
        } else {
            answer.style.display = 'block';
            icon.textContent = '-';
        }
    });
});

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const testimonialCards = document.querySelector('.testimonial-cards');


let currentIndex = 0;
const testimonials = document.querySelector('.testimonial-cards');
const testimonialCardCount = testimonials.children.length;
const cardWidth = testimonials.children[0].getBoundingClientRect().width;

document.querySelector('.next-btn').addEventListener('click', () => {
    if (currentIndex < testimonialCardCount - 3) {
        currentIndex++;
        testimonials.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        testimonials.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
});
