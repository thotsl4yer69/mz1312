/**
 * MAZLABZ.AI JavaScript
 * Handles form submission, smooth scrolling, and interactive features
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality when DOM is loaded
    initSmoothScrolling();
    initContactForm();
    initProductButtons();
    initAccessibility();
});

/**
 * Initialize smooth scrolling for navigation links
 * Provides smooth navigation between sections
 */
function initSmoothScrolling() {
    // Get all navigation links that point to sections
    const navLinks = document.querySelectorAll('nav a[href^="#"], .cta-button[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate offset to account for sticky header
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize contact form functionality
 * Handles form validation and submission
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    
    if (!form) return;
    
    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearFormErrors();
        
        // Validate form
        const isValid = validateForm();
        
        if (isValid) {
            // Get form data
            const formData = {
                name: nameField.value.trim(),
                email: emailField.value.trim(),
                message: messageField.value.trim()
            };
            
            // Display success message
            showSubmissionAlert(formData);
            
            // Reset form
            form.reset();
        }
    });
    
    // Real-time validation
    nameField.addEventListener('blur', () => validateField('name'));
    emailField.addEventListener('blur', () => validateField('email'));
    messageField.addEventListener('blur', () => validateField('message'));
}

/**
 * Validate individual form field
 * @param {string} fieldName - The name of the field to validate
 * @returns {boolean} - Whether the field is valid
 */
function validateField(fieldName) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(`${fieldName}-error`);
    let isValid = true;
    let errorMessage = '';
    
    const value = field.value.trim();
    
    switch (fieldName) {
        case 'name':
            if (!value) {
                errorMessage = 'Name is required';
                isValid = false;
            } else if (value.length < 2) {
                errorMessage = 'Name must be at least 2 characters';
                isValid = false;
            }
            break;
            
        case 'email':
            if (!value) {
                errorMessage = 'Email is required';
                isValid = false;
            } else if (!isValidEmail(value)) {
                errorMessage = 'Please enter a valid email address';
                isValid = false;
            }
            break;
            
        case 'message':
            if (!value) {
                errorMessage = 'Message is required';
                isValid = false;
            } else if (value.length < 10) {
                errorMessage = 'Message must be at least 10 characters';
                isValid = false;
            }
            break;
    }
    
    // Update error display
    if (errorElement) {
        errorElement.textContent = errorMessage;
        field.setAttribute('aria-invalid', !isValid);
    }
    
    return isValid;
}

/**
 * Validate entire form
 * @returns {boolean} - Whether the form is valid
 */
function validateForm() {
    const nameValid = validateField('name');
    const emailValid = validateField('email');
    const messageValid = validateField('message');
    
    return nameValid && emailValid && messageValid;
}

/**
 * Clear all form error messages
 */
function clearFormErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    const inputElements = document.querySelectorAll('input, textarea');
    
    errorElements.forEach(element => {
        element.textContent = '';
    });
    
    inputElements.forEach(element => {
        element.removeAttribute('aria-invalid');
    });
}

/**
 * Check if email format is valid
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show form submission alert with user data
 * @param {Object} formData - The submitted form data
 */
function showSubmissionAlert(formData) {
    const message = `Thank you, ${formData.name}!\n\nYour message has been received:\n"${formData.message}"\n\nWe'll get back to you at ${formData.email} soon.\n\nFOR THE PEOPLE. NOT THE PIGEONS.`;
    
    alert(message);
}

/**
 * Initialize product buy buttons
 * Handles product purchase interactions
 */
function initProductButtons() {
    const buyButtons = document.querySelectorAll('.buy-button');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            const message = `You clicked to purchase: ${productName}\nPrice: ${productPrice}\n\nThis is a demo site. In a real implementation, this would redirect to a payment processor.\n\nFIGHT THE SYSTEM!`;
            
            alert(message);
        });
    });
}

/**
 * Initialize accessibility features
 * Enhances keyboard navigation and screen reader support
 */
function initAccessibility() {
    // Add keyboard navigation for custom elements
    const interactiveElements = document.querySelectorAll('.product-card, .cta-button, .buy-button');
    
    interactiveElements.forEach(element => {
        // Add focus indicator for keyboard navigation
        element.addEventListener('focus', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        element.addEventListener('blur', function() {
            this.style.transform = '';
        });
    });
    
    // Add skip link functionality (if needed in the future)
    createSkipLink();
}

/**
 * Create skip link for accessibility
 * Allows keyboard users to skip to main content
 */
function createSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#hero';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--color-accent);
        color: var(--color-bg-primary);
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        font-weight: bold;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

/**
 * Utility function to debounce events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Initialize scroll-based animations (optional enhancement)
 * Adds subtle animations as elements come into view
 */
function initScrollAnimations() {
    // Only run if user doesn't prefer reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Observe product cards for animations
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize scroll animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Delay to ensure all other scripts are loaded
    setTimeout(initScrollAnimations, 100);
});

/**
 * Handle responsive navigation (for future mobile menu implementation)
 */
function initResponsiveNavigation() {
    // This can be expanded later for mobile hamburger menu
    const nav = document.querySelector('nav');
    
    // Add ARIA labels for better accessibility
    nav.setAttribute('aria-label', 'Main navigation');
}

// Initialize responsive navigation
document.addEventListener('DOMContentLoaded', initResponsiveNavigation);