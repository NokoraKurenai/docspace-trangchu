// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const header = document.querySelector('header');

mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Ngăn click trên menu lan ra ngoài
navLinks.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .feature-card, .step, .faq-item').forEach(el => {
    observer.observe(el);
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');
        const isActive = answer.classList.contains('active');
        
        // Close all answers
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.classList.remove('active');
        });
        
        // Reset all icons
        document.querySelectorAll('.faq-question i').forEach(i => {
            i.className = 'fas fa-chevron-down';
        });
        
        // Open clicked answer if it wasn't active
        if (!isActive) {
            answer.classList.add('active');
            icon.className = 'fas fa-chevron-up';
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Page load animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Additional fix for horizontal scroll
window.addEventListener('resize', () => {
    document.body.style.overflowX = 'hidden';
});

// Initial check
document.body.style.overflowX = 'hidden';