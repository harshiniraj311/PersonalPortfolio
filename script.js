// Loading screen animation
window.addEventListener('load', function() {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    loaderWrapper.style.opacity = '0';
    setTimeout(() => {
        loaderWrapper.style.display = 'none';
    }, 500);
    
    // Initialize animations after loading
    animateSections();
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update URL without page jump
            history.pushState(null, null, targetId);
        }
    });
});

// Back to top button functionality
document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animate sections when they come into view
function animateSections() {
    const sections = document.querySelectorAll('.section, .profile');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Skill items animation
const skillItems = document.querySelectorAll('.skills li');
skillItems.forEach((item, index) => {
    // Add delay based on index for staggered animation
    item.style.transitionDelay = `${index * 0.1}s`;
});

// Project hover effects
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
    
    project.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
    });
});

// Certificate hover effects
const certificates = document.querySelectorAll('.certificate');
certificates.forEach(certificate => {
    certificate.addEventListener('mouseenter', function() {
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.05)';
        }
    });
    
    certificate.addEventListener('mouseleave', function() {
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = '';
        }
    });
});

// Social icons animation
const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
        this.style.backgroundColor = '#340a6b';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.backgroundColor = '#46118a';
    });
});

// Profile image animation
const profileImg = document.querySelector('.profile img');
if (profileImg) {
    profileImg.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
        this.style.borderColor = '#340a6b';
    });
    
    profileImg.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
        this.style.borderColor = '#7d2ae8';
    });
}

// "Let's Talk" button animation
const talkButton = document.querySelector('.about-me a');
if (talkButton) {
    talkButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        this.style.backgroundColor = '#340a6b';
    });
    
    talkButton.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
        this.style.backgroundColor = '#7d2ae8';
    });
}
