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
    // Clone Enroll button to mobile menu on small screens
    const enrollBtn = document.querySelector('.header-actions .btn-gold');
    if (window.innerWidth <= 991 && enrollBtn && navLinks) {
        const mobileEnroll = enrollBtn.cloneNode(true);
        mobileEnroll.classList.add('mobile-enroll-btn');
        mobileEnroll.style.width = '100%';
        mobileEnroll.style.textAlign = 'center';
        mobileEnroll.style.marginTop = '1rem';
        navLinks.appendChild(mobileEnroll);
    }

    if (mobileBtn && navLinks) {
        const overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);

        const closeMenu = () => {
            mobileBtn.classList.remove('open');
            navLinks.classList.remove('active');
            overlay.classList.remove('visible');
            document.body.classList.remove('menu-open');
            mobileBtn.setAttribute('aria-expanded', 'false');
        };

        mobileBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('open', isOpen);
            overlay.classList.toggle('visible', isOpen);
            document.body.classList.toggle('menu-open', isOpen);
            mobileBtn.setAttribute('aria-expanded', String(isOpen));
        });

        overlay.addEventListener('click', closeMenu);
        navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth > 992) closeMenu();
        });
    }

    // 2. Form Success Handling (no page reload)
    const formSuccessMessages = {
        '.cta-form': 'Subscribed successfully! Welcome to the LingoSphere list.',
        '.footer-newsletter': 'Subscribed! You are now on the Private List.',
        '#enquiryForm': 'Thank you! Your enquiry has been sent. We will reply within 24 hours.'
    };

    function showFormSuccess(form, message) {
        form.reset();
        form.querySelectorAll('.form-success').forEach(el => el.remove());
        const msg = document.createElement('div');
        msg.className = 'form-success';
        msg.innerHTML = '<i class="fa-solid fa-circle-check"></i>' + message;
        form.insertAdjacentElement('afterend', msg);
        setTimeout(() => msg.classList.add('fade'), 6000);
        setTimeout(() => msg.remove(), 6700);
    }

    Object.entries(formSuccessMessages).forEach(([selector, message]) => {
        if (selector === '#enquiryForm') return;
        document.querySelectorAll(selector).forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                showFormSuccess(form, message);
            });
        });
    });

    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let valid = true;
            enquiryForm.querySelectorAll('.form-control[required]').forEach(field => {
                const error = field.closest('.form-group')?.querySelector('.form-error');
                const isEmail = field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
                const isEmpty = !field.value.trim();
                if (isEmpty || isEmail) {
                    field.classList.add('invalid');
                    error?.classList.add('visible');
                    valid = false;
                } else {
                    field.classList.remove('invalid');
                    error?.classList.remove('visible');
                }
            });
            if (valid) showFormSuccess(enquiryForm, formSuccessMessages['#enquiryForm']);
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

    // 5. Blog Category & Search Filtering
    const filterBtns = document.querySelectorAll('[data-filter]');
    const blogSearch = document.getElementById('blog-search');
    const blogCards = document.querySelectorAll('#blog-grid > article');
    const blogEmpty = document.getElementById('blog-empty');

    if (filterBtns.length) {
        let activeFilter = 'all';
        let searchQuery = '';

        const normalize = (text) => (text || '').trim().toLowerCase().replace(/\s+/g, '-');
        const matchesFilters = (element) => {
            const category = normalize(element.dataset.category || element.querySelector('span')?.textContent || '');
            const title = (element.querySelector('h3')?.textContent || '').toLowerCase();
            const excerpt = (element.querySelector('p')?.textContent || '').toLowerCase();
            const okCategory = activeFilter === 'all' || category === activeFilter;
            const okSearch = !searchQuery
                || title.includes(searchQuery)
                || excerpt.includes(searchQuery)
                || category.includes(searchQuery);
            return okCategory && okSearch;
        };

        const applyFilters = () => {
            let visible = 0;
            blogCards.forEach(card => {
                const show = matchesFilters(card);
                card.style.display = show ? '' : 'none';
                if (show) visible++;
            });
            if (blogEmpty) blogEmpty.style.display = visible === 0 ? 'block' : 'none';
        };

        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                activeFilter = btn.dataset.filter;
                filterBtns.forEach(b => b.classList.toggle('active', b === btn));
                applyFilters();
            });
        });

        blogSearch?.addEventListener('input', () => {
            searchQuery = blogSearch.value.trim().toLowerCase();
            applyFilters();
        });
    }

});
