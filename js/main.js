/**
 * LingoSphere Main JavaScript Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme & Direction Management
    const themeBtn = document.getElementById('theme-toggle');
    const dirBtn = document.getElementById('dir-toggle');
    const htmlEl = document.documentElement;

    // Load preferences
    const savedTheme = localStorage.getItem('lingo-theme') || 'light';
    const savedDir = localStorage.getItem('lingo-dir') || 'ltr';

    htmlEl.setAttribute('data-theme', savedTheme);
    htmlEl.setAttribute('dir', savedDir);
    updateThemeIcon(savedTheme);
    updateDirIcon(savedDir);

    // Toggle Theme
    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            htmlEl.setAttribute('data-theme', newTheme);
            localStorage.setItem('lingo-theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    // Toggle Direction
    if(dirBtn) {
        dirBtn.addEventListener('click', () => {
            const currentDir = htmlEl.getAttribute('dir');
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            htmlEl.setAttribute('dir', newDir);
            localStorage.setItem('lingo-dir', newDir);
            updateDirIcon(newDir);
        });
    }

    function updateThemeIcon(theme) {
        if(!themeBtn) return;
        themeBtn.innerHTML = theme === 'light' 
            ? '<i class="fa-solid fa-moon"></i>' 
            : '<i class="fa-solid fa-sun"></i>';
    }

    function updateDirIcon(dir) {
        if(!dirBtn) return;
        dirBtn.innerHTML = dir === 'ltr' ? 'RTL' : 'LTR';
    }

    // 2. Active Nav Link Indication
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links .nav-link').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Sticky Header & Back to Top
    const header = document.querySelector('.header');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }

        if (window.scrollY > 500) {
            backToTop?.classList.add('visible');
        } else {
            backToTop?.classList.remove('visible');
        }
    });

    backToTop?.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 3. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Animated Counters
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        entry.target.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        entry.target.innerText = target;
                    }
                };
                updateCounter();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

});
