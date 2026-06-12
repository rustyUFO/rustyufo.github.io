// Splash screen fade out after 3 seconds
window.addEventListener('load', function() {
    const splashScreen = document.getElementById('splashScreen');
    const mainContent = document.getElementById('mainContent');
    
    setTimeout(function() {
        splashScreen.style.display = 'none';
        mainContent.style.animation = 'fadeInUp 0.6s ease forwards';
    }, 3000);
});

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
            alert(`Thank you! We'll contact you at: ${email}`);
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

console.log('🚀 rustyUFO Portfolio Loaded!');
