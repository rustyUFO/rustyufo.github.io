// Smooth scrolling for navigation
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

// Contact button functionality
const contactBtn = document.querySelector('.contact-btn');
const emailInput = document.querySelector('.email-input');

if (contactBtn) {
    contactBtn.addEventListener('click', function() {
        const email = emailInput.value.trim();
        if (email) {
            // Here you can add your email sending logic
            alert(`Inquiry sent from: ${email}`);
            emailInput.value = '';
        } else {
            alert('Please enter your email address');
        }
    });
}

// Keyboard Enter to submit
if (emailInput) {
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            contactBtn.click();
        }
    });
}

// Add parallax effect on scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const blurBackground = document.querySelector('.blur-background');
    if (blurBackground) {
        blurBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Intersection Observer for animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.box, .dance-card').forEach(element => {
    observer.observe(element);
});

// Box click effects
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
});

console.log('rustyUFO Portfolio Loaded! 🎨');