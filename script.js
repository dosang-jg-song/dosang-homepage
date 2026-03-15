/* ============================================
   DOSANG - Corporate Website Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    const handleScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // --- Mobile Navigation ---
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        mobileToggle.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            mobileToggle.classList.remove('active');
        });
    });

    // --- Active Nav Link on Scroll ---
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-links a');

    const observerNav = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observerNav.observe(section));

    // --- Scroll Fade-In Animation ---
    const fadeElements = document.querySelectorAll(
        '.service-card, .solution-card, .expertise-item, .stat-item, .contact-item, .about-text, .contact-form, .philosophy, .team-highlight'
    );

    fadeElements.forEach(el => el.classList.add('fade-in'));

    const observerFade = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observerFade.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    fadeElements.forEach(el => observerFade.observe(el));

    // --- Counter Animation ---
    const counters = document.querySelectorAll('.stat-number[data-target]');

    const observerCounter = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                const duration = 1500;
                const start = performance.now();

                const easeOut = t => 1 - Math.pow(1 - t, 3);

                const animate = (now) => {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const value = Math.round(easeOut(progress) * target);
                    el.textContent = value;

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };

                requestAnimationFrame(animate);
                observerCounter.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observerCounter.observe(counter));

    // --- Smooth Scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const offset = 72;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // --- Join Us: show/hide resume upload ---
    const inquirySelect = document.getElementById('inquiry');
    const resumeGroup = document.getElementById('resumeGroup');
    const resumeInput = document.getElementById('resume');
    const resumeFileName = document.getElementById('resumeFileName');
    const messageField = document.getElementById('message');

    inquirySelect.addEventListener('change', () => {
        if (inquirySelect.value === 'join') {
            resumeGroup.style.display = 'block';
            messageField.placeholder = '간단한 자기소개 또는 지원 동기를 입력해 주세요.';
        } else {
            resumeGroup.style.display = 'none';
            messageField.placeholder = '문의 내용을 입력해 주세요.';
        }
    });

    resumeInput.addEventListener('change', () => {
        if (resumeInput.files.length > 0) {
            resumeFileName.textContent = resumeInput.files[0].name;
            resumeInput.closest('.form-group').querySelector('.file-upload-label').classList.add('has-file');
        } else {
            resumeFileName.textContent = '이력서 첨부 (PDF, DOC)';
            resumeInput.closest('.form-group').querySelector('.file-upload-label').classList.remove('has-file');
        }
    });

    // --- Contact Form (Web3Forms) ---
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = '전송 중...';
        btn.disabled = true;

        try {
            const formData = new FormData(form);
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();

            if (result.success) {
                btn.textContent = '전송 완료!';
                btn.style.background = '#22c55e';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                    form.reset();
                    // Reset resume group visibility
                    resumeGroup.style.display = 'none';
                    resumeFileName.textContent = '이력서 첨부 (PDF, DOC)';
                    const label = resumeGroup.querySelector('.file-upload-label');
                    if (label) label.classList.remove('has-file');
                    messageField.placeholder = '문의 내용을 입력해 주세요.';
                }, 2500);
            } else {
                throw new Error('전송 실패');
            }
        } catch (err) {
            btn.textContent = '전송 실패 — 다시 시도해 주세요';
            btn.style.background = '#ef4444';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }
    });

});
