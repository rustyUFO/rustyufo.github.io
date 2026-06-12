// Splash screen fade out after 3 seconds
window.addEventListener('load', function() {
    const splashScreen = document.getElementById('splashScreen');
    const mainContent = document.getElementById('mainContent');
    
    setTimeout(function() {
        splashScreen.style.display = 'none';
        if (mainContent) {
            mainContent.style.opacity = '0';
            mainContent.style.animation = 'fadeIn 0.6s ease forwards';
        }
    }, 3000);
});

// Add fade in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    #mainContent {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Contact button functionality
const sendBtn = document.querySelector('.send-btn');
const emailInput = document.querySelector('.email-input');

if (sendBtn) {
    sendBtn.addEventListener('click', function() {
        const email = emailInput.value.trim();
        if (email) {
            alert(`Thank you! We'll contact you at: ${email}`);
            emailInput.value = '';
        } else {
            alert('Please enter your email address');
        }
    });
}

if (emailInput) {
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });
}

console.log('🚀 rustyUFO Portfolio Loaded!');
