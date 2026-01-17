/* =====================================================
   SHANMUKHA VAMSHI - PORTFOLIO SCRIPTS
   Modern, Interactive JavaScript
   ===================================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initLoader();
    initThemeToggle();
    initNavigation();
    initTypingEffect();
    initScrollAnimations();
    initProjectFilters();
    initTestimonialSlider();
    initTimelineTabs();
    initContactForm();
    initBackToTop();
    initCounterAnimation();
    initProgressBars();
});

/* =====================================================
   LOADER
   ===================================================== */
function initLoader() {
    const loader = document.getElementById('loader');
    
    if (loader) {
        // Hide loader after animation completes
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 2000);
    }
}

/* =====================================================
   THEME TOGGLE (Dark/Light Mode)
   ===================================================== */
function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    if (toggle) {
        toggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

/* =====================================================
   NAVIGATION
   ===================================================== */
function initNavigation() {
    const desktopNav = document.querySelector('.desktop-nav');
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const mobileClose = document.getElementById('mobile-nav-close');
    const mobileMenu = document.getElementById('mobile-nav-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-item');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Desktop nav scroll effect
    if (desktopNav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                desktopNav.classList.add('scrolled');
            } else {
                desktopNav.classList.remove('scrolled');
            }
        });
    }
    
    // Mobile menu toggle
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (mobileClose && mobileMenu) {
        mobileClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Active link highlighting based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
}

/* =====================================================
   TYPING EFFECT
   ===================================================== */
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    
    if (!typingElement) return;
    
    const texts = [
        'Software Engineer',
        'Full Stack Developer',
        'ML Enthusiast',
        'Problem Solver',
        'Tech Innovator'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before new word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing effect
    setTimeout(type, 1000);
}

/* =====================================================
   SCROLL ANIMATIONS (Reveal on scroll)
   ===================================================== */
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add delay if specified
                const delay = getComputedStyle(entry.target).getPropertyValue('--delay') || '0s';
                entry.target.style.transitionDelay = delay;
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

/* =====================================================
   PROJECT FILTERS
   ===================================================== */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeUp 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

/* =====================================================
   TESTIMONIAL SLIDER
   ===================================================== */
function initTestimonialSlider() {
    const slider = document.getElementById('testimonials-slider');
    if (!slider) return;
    
    const cards = slider.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    const prevBtn = document.querySelector('.testimonial-arrow.prev');
    const nextBtn = document.querySelector('.testimonial-arrow.next');
    
    let currentSlide = 0;
    const totalSlides = cards.length;
    
    function showSlide(index) {
        // Wrap around
        if (index >= totalSlides) index = 0;
        if (index < 0) index = totalSlides - 1;
        
        currentSlide = index;
        
        // Update cards
        cards.forEach((card, i) => {
            card.classList.remove('active');
            if (i === currentSlide) {
                card.classList.add('active');
            }
        });
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === currentSlide) {
                dot.classList.add('active');
            }
        });
    }
    
    // Arrow navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-slide
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

/* =====================================================
   TIMELINE TABS
   ===================================================== */
function initTimelineTabs() {
    const tabs = document.querySelectorAll('.timeline-tab');
    const panels = document.querySelectorAll('.timeline-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            
            // Update tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update panels
            panels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === `${target}-panel`) {
                    panel.classList.add('active');
                    // Re-trigger reveal animations
                    const reveals = panel.querySelectorAll('.reveal-up');
                    reveals.forEach(el => {
                        el.classList.remove('revealed');
                        setTimeout(() => el.classList.add('revealed'), 100);
                    });
                }
            });
        });
    });
}

/* =====================================================
   CONTACT FORM
   ===================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<span class="material-symbols-outlined">hourglass_empty</span> Sending...';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = new FormData(form);
        
        try {
            // If you have Formspree configured, uncomment below
            // const response = await fetch(form.action, {
            //     method: 'POST',
            //     body: formData,
            //     headers: {
            //         'Accept': 'application/json'
            //     }
            // });
            
            // Simulate form submission for demo
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Success
            submitBtn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> Message Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            form.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
            
        } catch (error) {
            // Error
            submitBtn.innerHTML = '<span class="material-symbols-outlined">error</span> Error!';
            submitBtn.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }
    });
}

/* =====================================================
   BACK TO TOP BUTTON
   ===================================================== */
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    
    if (!backToTop) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* =====================================================
   COUNTER ANIMATION (Stats)
   ===================================================== */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterOptions = {
        threshold: 0.5
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count')) || 0;
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current) + (target > 10 ? '+' : '');
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + (target > 10 ? '+' : '');
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, counterOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

/* =====================================================
   PROGRESS BARS (Skills)
   ===================================================== */
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const progressOptions = {
        threshold: 0.5
    };
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.getAttribute('data-progress') || 0;
                
                setTimeout(() => {
                    bar.style.width = `${progress}%`;
                }, 200);
                
                progressObserver.unobserve(bar);
            }
        });
    }, progressOptions);
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

/* =====================================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ===================================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

/* =====================================================
   PARALLAX EFFECT (Optional - subtle)
   ===================================================== */
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroGradient = document.querySelector('.hero-gradient');
    
    if (heroGradient) {
        heroGradient.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.05}px)`;
    }
});

/* =====================================================
   KEYBOARD NAVIGATION SUPPORT
   ===================================================== */
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-nav-menu');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

/* =====================================================
   PREFERS REDUCED MOTION
   ===================================================== */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-base', '0ms');
    document.documentElement.style.setProperty('--transition-slow', '0ms');
}

/* =====================================================
   CONSOLE MESSAGE
   ===================================================== */
console.log('%c👋 Hello, fellow developer!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cInterested in the code? Check out the repo: https://github.com/Shan-Vision05/Portfolio', 'font-size: 14px; color: #64748b;');
