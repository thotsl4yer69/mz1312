document.addEventListener('DOMContentLoaded', () => {
    // Enhanced button interactions
    const deployButtons = document.querySelectorAll('.btn-deploy');

    deployButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = button.closest('.product-card');
            const title = card.querySelector('h3').textContent;
            const isCrypto = button.classList.contains('btn-crypto');
            
            // Add ripple effect
            createRippleEffect(button, e);
            
            // Enhanced feedback based on payment type
            if (isCrypto) {
                showNotification(`🔒 CRYPTO DEPLOY: ${title}`, 'Deploy initiated via Bitcoin. Confirm transaction to complete.', 'crypto');
            } else {
                showNotification(`🚀 DEPLOY: ${title}`, 'Asset deployment sequence initiated. Stand by...', 'deploy');
            }
        });

        // Enhanced hover effects for buttons
        button.addEventListener('mouseenter', () => {
            if (!button.classList.contains('btn-crypto')) {
                button.style.transform = 'translateY(-2px) scale(1.02)';
            }
        });

        button.addEventListener('mouseleave', () => {
            if (!button.classList.contains('btn-crypto')) {
                button.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Enhanced dossier interactions
    const dossierSummaries = document.querySelectorAll('.dossier-summary');
    
    dossierSummaries.forEach(summary => {
        summary.addEventListener('click', (e) => {
            const dossier = summary.closest('.product-dossier');
            const isOpen = dossier.hasAttribute('open');
            
            // Add sound effect simulation (visual feedback)
            summary.style.transform = 'scale(0.98)';
            setTimeout(() => {
                summary.style.transform = 'scale(1)';
            }, 100);

            // Animate content reveal/hide
            if (!isOpen) {
                setTimeout(() => {
                    const content = dossier.querySelector('.dossier-content');
                    if (content) {
                        content.style.animation = 'contentReveal 0.4s ease-out';
                    }
                }, 50);
            }
        });
    });

    // Scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.product-dossier, .product-card').forEach(el => {
        observer.observe(el);
    });

    // Enhanced BTC address interaction
    const btcInfo = document.querySelector('.btc-info');
    if (btcInfo) {
        btcInfo.addEventListener('click', () => {
            navigator.clipboard.writeText(btcInfo.textContent.replace('BTC: ', '')).then(() => {
                showNotification('📋 BTC ADDRESS COPIED', 'Bitcoin address copied to clipboard', 'success');
            }).catch(() => {
                showNotification('⚠️ COPY FAILED', 'Please copy the address manually', 'warning');
            });
        });
    }

    // Parallax effect for background elements
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        document.body.style.setProperty('--scroll-offset', `${rate}px`);
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);

    // Easter egg: Konami code
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode = konamiCode.slice(-konamiSequence.length);
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            activateMatrixMode();
            konamiCode = [];
        }
    });

    function activateMatrixMode() {
        document.body.classList.add('matrix-mode');
        showNotification('🔮 MATRIX MODE ACTIVATED', 'Welcome to the real MAZLABZ experience...', 'matrix');
        
        setTimeout(() => {
            document.body.classList.remove('matrix-mode');
        }, 10000);
    }
});

// Utility functions
function createRippleEffect(button, event) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1;
    `;

    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function showNotification(title, message, type = 'default') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const colors = {
        deploy: 'var(--color-accent-cyan)',
        crypto: 'var(--color-accent-orange)',
        success: 'var(--color-accent-green)',
        warning: 'var(--color-accent-red)',
        matrix: 'var(--color-accent-purple)',
        default: 'var(--color-accent-pink)'
    };

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--color-bg-secondary), var(--color-bg-tertiary));
        border: 2px solid ${colors[type] || colors.default};
        padding: 1rem 1.5rem;
        border-radius: 4px;
        color: var(--color-text-primary);
        font-family: var(--font-main);
        font-size: 0.9rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${colors[type] || colors.default}33;
        z-index: 9999;
        max-width: 350px;
        animation: notificationSlideIn 0.4s ease-out;
        backdrop-filter: blur(10px);
    `;

    notification.innerHTML = `
        <div style="font-weight: bold; margin-bottom: 0.5rem; font-family: var(--font-display); text-transform: uppercase; letter-spacing: 0.05em;">${title}</div>
        <div style="opacity: 0.9; line-height: 1.4;">${message}</div>
    `;

    document.body.appendChild(notification);

    // Auto remove after 4 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'notificationSlideOut 0.4s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 400);
        }
    }, 4000);

    // Click to dismiss
    notification.addEventListener('click', () => {
        notification.style.animation = 'notificationSlideOut 0.4s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 400);
    });
}
