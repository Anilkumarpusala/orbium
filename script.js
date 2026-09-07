/**
 * ORBIUM STUDIO — AWWWARDS SOTD JAVASCRIPT ARCHITECTURE
 * Features:
 * - 60 FPS Interactive HTML5 Ambient Canvas Particle Fluid Engine
 * - Custom Magnetic Kinetic Cursor with Lerp and Dynamic Badge Expansion
 * - 3D Card Tilt Physics
 * - Lenis Smooth Momentum Scrolling
 * - Interactive Budget & Service Selector Chips
 * - Contact Terminal Suite Routing to anilmcqueen@outlook.com
 */

(function () {
  'use strict';

  // --- Project Specifications Data Archive ---
  const PROJECT_ARCHIVE = {
    'vogue-noir': {
      title: 'Vogue Noir Atelier',
      category: 'Luxury Fashion & E-Commerce Flagship',
      client: 'Atelier Noir Paris (Boutique Haute Couture)',
      year: '2026 COMMERCE',
      heroImg: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&fm=webp&w=1400&q=80',
      overview: 'A tactile, high-concept digital salon created for an exclusive Parisian haute-couture atelier. The client required an experience that mirrored the weight, intimacy, and exclusivity of their physical salon while commanding international private client bookings.',
      solution: 'Engineered a bespoke editorial experience with fluid typographic pacing, tactile cursor interactions, an archival runway lookbook, and an integrated private client appointment concierge.',
      deliverables: ['Creative Art Direction', 'Brand Strategy', 'Custom Front-End Engineering', 'Private Booking API', 'Technical SEO'],
      techStack: ['Semantic Modern HTML5', 'Modular CSS Architecture', 'Vanilla JS Engine', 'Headless CMS Integration', 'Global Edge CDN'],
      liveUrl: 'https://showcase.anilmcqueen.website/vogue-noir'
    },
    'aeroflow': {
      title: 'AeroFlow HVAC',
      category: 'High-Ticket Commercial & Industrial Service',
      client: 'AeroFlow Mechanical Contractors',
      year: '2026 INFRASTRUCTURE',
      heroImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&fm=webp&w=1400&q=80',
      overview: 'AeroFlow is a high-volume commercial HVAC and environmental engineering provider. Their legacy website looked identical to generic residential repair businesses, failing to command authority with multimillion-dollar commercial developers and general contractors.',
      solution: 'Rebuilt their digital identity from the ground up as a precision industrial infrastructure brand. Engineered a multi-tier commercial estimation matrix and interactive system specification catalogue.',
      deliverables: ['Market Repositioning', 'Technical Design System', 'Commercial Estimator', 'Speed Hardening (100 Mobile Score)'],
      techStack: ['Clean Semantic Architecture', 'Custom Interactive Estimator', 'Schema.org Commercial Metadata', 'Lighthouse 99+'],
      liveUrl: 'https://showcase.anilmcqueen.website/aeroflow-hvac'
    },
    'apex': {
      title: 'Studio Zero / Apex Capital',
      category: 'Venture Capital & Fintech Interface',
      client: 'Apex Capital Partners',
      year: '2026 CAPITAL',
      heroImg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&fm=webp&w=1400&q=80',
      overview: 'An institutional venture capital firm specializing in seed and series A technology investments. They required a restrained, authoritative digital interface to attract premier technical founders and institutional limited partners.',
      solution: 'Engineered a monolithic, high-contrast digital flagship featuring an interactive portfolio relationship graph, real-time syndicate allocation updates, and partner thesis documentation.',
      deliverables: ['Institutional Brand System', 'Interactive Portfolio Graph', 'LP Portal Architecture', 'Next.js Edge Deployment'],
      techStack: ['Modern Web Standards', 'Canvas Relationship Graph', 'Edge CDN', 'Zero-Jank Transitions'],
      liveUrl: 'https://showcase.anilmcqueen.website'
    }
  };

  // --- Lenis Smooth Scrolling Engine Initialization ---
  let lenis = null;
  if (typeof window.Lenis !== 'undefined') {
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothTouch: false, // 100% native touch on mobile
        touchMultiplier: 1.5,
        infinite: false
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    } catch (e) {
      console.warn('Lenis initialization skipped:', e);
    }
  }

  // --- 1. Interactive Background Canvas Layer (HTML5 Canvas) ---
  const canvas = document.getElementById('ambientCanvas');
  let ctx = null;
  let particles = [];
  let width = window.innerWidth;
  let height = window.innerHeight;
  let mouse = { x: -1000, y: -1000, radius: 160 };

  if (canvas) {
    ctx = canvas.getContext('2d');

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    }

    function initParticles() {
      particles = [];
      const count = Math.floor(Math.min(width, 1600) / 18);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.5 + 0.6,
          baseAlpha: Math.random() * 0.35 + 0.15
        });
      }
    }

    function animateCanvas() {
      ctx.clearRect(0, 0, width, height);

      // Render connecting lines & particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Cursor proximity warp
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.8;
          p.y -= (dy / dist) * force * 1.8;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 242, 237, ${p.baseAlpha})`;
        ctx.fill();

        // Connect nearby particles with subtle tension lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 110) {
            const lineAlpha = (1 - dist2 / 110) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 68, 0, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateCanvas);
    }

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    resizeCanvas();
    requestAnimationFrame(animateCanvas);
  }

  // --- 2. Custom Magnetic Kinetic Cursor with Lerp & Badge Expansion ---
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const cursorBadge = document.getElementById('cursorBadge');

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;
  let isHoveringInteractive = false;
  let isBadgeMode = false;

  if (cursorDot && cursorRing) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function renderCursor() {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Hover interactive badges on case study cards
    const badgeElements = document.querySelectorAll('[data-cursor-badge]');
    badgeElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        const badgeText = el.getAttribute('data-cursor-badge') || 'EXPLORE';
        if (cursorBadge) cursorBadge.textContent = badgeText;
        cursorRing.classList.add('badge-active');
        isBadgeMode = true;
      });

      el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('badge-active');
        if (cursorBadge) cursorBadge.textContent = '';
        isBadgeMode = false;
      });
    });

    // Hover links & buttons
    const interactiveElements = document.querySelectorAll('a, button, .chip-btn, .service-accordion-trigger, .faq-trigger');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (!isBadgeMode) cursorRing.classList.add('hover-active');
      });
      el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('hover-active');
      });
    });
  }

  // --- 3. 3D Card Tilt Physics on Case Studies (.tilt-card) ---
  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  // --- 4. Magnetic Physics for Buttons (.btn-magnetic) ---
  const magneticButtons = document.querySelectorAll('.btn-magnetic');

  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', function (e) {
      const rect = this.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
      this.style.transform = `translate(${x}px, ${y}px)`;
    });

    btn.addEventListener('mouseleave', function () {
      this.style.transform = 'translate(0px, 0px)';
    });
  });

  // --- 5. Dual-Timezone Active Studio Clock (IST & UTC) ---
  const tzReadout = document.getElementById('tzReadout');
  const dynYear = document.getElementById('dynYear');

  if (dynYear) {
    dynYear.textContent = new Date().getFullYear();
  }

  function updateDualClock() {
    if (!tzReadout) return;
    const now = new Date();

    // UTC
    const utcHours = String(now.getUTCHours()).padStart(2, '0');
    const utcMins = String(now.getUTCMinutes()).padStart(2, '0');
    const utcSecs = String(now.getUTCSeconds()).padStart(2, '0');

    // IST (UTC + 5:30)
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + istOffset);
    const istHours = String(istTime.getHours()).padStart(2, '0');
    const istMins = String(istTime.getMinutes()).padStart(2, '0');
    const istSecs = String(istTime.getSeconds()).padStart(2, '0');

    tzReadout.textContent = `${utcHours}:${utcMins}:${utcSecs} UTC · ${istHours}:${istMins}:${istSecs} IST`;
  }
  updateDualClock();
  setInterval(updateDualClock, 1000);

  // --- 6. Header Scroll Hardening & Nav Highlighting ---
  const siteHeader = document.querySelector('.site-header');
  const navSections = document.querySelectorAll('main section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  function handleHeaderScroll() {
    if (!siteHeader) return;
    if (window.scrollY > 40) {
      siteHeader.style.backgroundColor = 'rgba(11, 11, 12, 0.95)';
      siteHeader.style.borderColor = 'rgba(255, 255, 255, 0.14)';
    } else {
      siteHeader.style.backgroundColor = 'rgba(15, 15, 17, 0.75)';
      siteHeader.style.borderColor = 'rgba(255, 255, 255, 0.08)';
    }

    // Scroll spy
    const scrollPosition = window.scrollY + 140;
    navSections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });

  // --- 7. Mobile Navigation Drawer ---
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileCloseAction = document.getElementById('mobileCloseAction');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function openMobileNav() {
    if (!mobileOverlay || !mobileToggle) return;
    mobileOverlay.classList.add('open');
    mobileOverlay.setAttribute('aria-hidden', 'false');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!mobileOverlay || !mobileToggle) return;
    mobileOverlay.classList.remove('open');
    mobileOverlay.setAttribute('aria-hidden', 'true');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      const isOpen = mobileOverlay.classList.contains('open');
      if (isOpen) closeMobileNav();
      else openMobileNav();
    });
  }

  if (mobileCloseAction) mobileCloseAction.addEventListener('click', closeMobileNav);
  mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  // --- 8. Toast Notification Utility ---
  const toastHub = document.getElementById('toastHub');

  function showToast(message) {
    if (!toastHub) return;
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `
      <svg class="toast-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;
    toastHub.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fadeout');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- 9. 1-Click Studio Email Copy (anilmcqueen@outlook.com) ---
  const copyEmailTrigger = document.getElementById('copyEmailTrigger');
  const copyTooltipText = document.getElementById('copyTooltipText');

  if (copyEmailTrigger) {
    copyEmailTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      const studioEmail = 'anilmcqueen@outlook.com';

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(studioEmail).then(onCopySuccess).catch(fallbackCopy);
      } else {
        fallbackCopy();
      }

      function onCopySuccess() {
        if (copyTooltipText) {
          copyTooltipText.textContent = 'Copied!';
          copyTooltipText.classList.add('show');
          setTimeout(() => {
            copyTooltipText.textContent = 'Copy';
            copyTooltipText.classList.remove('show');
          }, 2000);
        }
        showToast('anilmcqueen@outlook.com copied to clipboard!');
      }

      function fallbackCopy() {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = studioEmail;
        tempTextArea.style.position = 'fixed';
        tempTextArea.style.left = '-9999px';
        document.body.appendChild(tempTextArea);
        tempTextArea.focus();
        tempTextArea.select();
        try {
          document.execCommand('copy');
          onCopySuccess();
        } catch (err) {
          showToast('Direct line: anilmcqueen@outlook.com');
        }
        document.body.removeChild(tempTextArea);
      }
    });
  }

  // --- 10. Services Accordion (Section [E]) ---
  const serviceItems = document.querySelectorAll('.service-accordion-item');

  serviceItems.forEach(item => {
    const trigger = item.querySelector('.service-accordion-trigger');
    const body = item.querySelector('.service-accordion-body');

    if (trigger && body) {
      trigger.addEventListener('click', function () {
        const isActive = item.classList.contains('active');

        serviceItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.service-accordion-trigger');
          const otherBody = otherItem.querySelector('.service-accordion-body');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherBody) otherBody.style.display = 'none';
        });

        if (!isActive) {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
          body.style.display = 'block';
        }
      });
    }
  });

  // --- 11. Strategic FAQ Accordion (Section [I]) ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const answer = item.querySelector('.faq-answer');

    if (trigger && answer) {
      trigger.addEventListener('click', function () {
        const isActive = item.classList.contains('active');

        if (isActive) {
          item.classList.remove('active');
          trigger.setAttribute('aria-expanded', 'false');
          answer.style.display = 'none';
        } else {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
          answer.style.display = 'block';
        }
      });
    }
  });

  // --- 12. Case Study Quick Inspect Modal ---
  const caseStudyModal = document.getElementById('caseStudyModal');
  const csModalClose = document.getElementById('csModalClose');
  const csModalBody = document.getElementById('csModalBody');

  function openCaseStudyModal(projectId) {
    const project = PROJECT_ARCHIVE[projectId];
    if (!project || !caseStudyModal || !csModalBody) return;

    csModalBody.innerHTML = `
      <div class="cs-header">
        <div class="cs-category-badge">${project.category} · ${project.year}</div>
        <h3 class="cs-modal-title">${project.title}</h3>
      </div>

      <div class="cs-img-box">
        <img src="${project.heroImg}" alt="${project.title} High-Resolution Flagship Preview" class="cs-modal-img" loading="eager">
      </div>

      <div class="cs-spec-grid">
        <div class="cs-block">
          <h4 class="cs-block-label">Commercial Challenge & Scope</h4>
          <p class="cs-block-text">${project.overview}</p>
        </div>
        <div class="cs-block">
          <h4 class="cs-block-label">Architectural Solution</h4>
          <p class="cs-block-text">${project.solution}</p>
        </div>
      </div>

      <div class="cs-spec-grid">
        <div class="cs-block">
          <h4 class="cs-block-label">Engineered Deliverables</h4>
          <div class="cs-tag-cloud">
            ${project.deliverables.map(item => `<span class="spec-pill">${item}</span>`).join('')}
          </div>
        </div>
        <div class="cs-block">
          <h4 class="cs-block-label">Technology Stack</h4>
          <div class="cs-tag-cloud">
            ${project.techStack.map(item => `<span class="spec-pill">${item}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="cs-actions-row">
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <span>Launch Live Showcase</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <a href="#contact" class="btn btn-secondary btn-sm" onclick="document.getElementById('caseStudyModal').classList.remove('open')">
          Commission Similar Build
        </a>
      </div>
    `;

    caseStudyModal.classList.add('open');
    caseStudyModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseStudyModal() {
    if (!caseStudyModal) return;
    caseStudyModal.classList.remove('open');
    caseStudyModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.inspect-trigger-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const target = this.getAttribute('data-target');
      if (target) openCaseStudyModal(target);
    });
  });

  if (csModalClose) csModalClose.addEventListener('click', closeCaseStudyModal);
  if (caseStudyModal) {
    caseStudyModal.addEventListener('click', function (e) {
      if (e.target === caseStudyModal) closeCaseStudyModal();
    });
  }

  // --- 13. Privacy Policy & Terms of Service Modals ---
  const privacyModal = document.getElementById('privacyModal');
  const privacyModalClose = document.getElementById('privacyModalClose');
  const triggerPrivacyModal = document.getElementById('triggerPrivacyModal');

  const termsModal = document.getElementById('termsModal');
  const termsModalClose = document.getElementById('termsModalClose');
  const triggerTermsModal = document.getElementById('triggerTermsModal');

  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('open');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (triggerPrivacyModal) triggerPrivacyModal.addEventListener('click', () => openModal(privacyModal));
  if (privacyModalClose) privacyModalClose.addEventListener('click', () => closeModal(privacyModal));
  if (privacyModal) privacyModal.addEventListener('click', (e) => { if (e.target === privacyModal) closeModal(privacyModal); });

  if (triggerTermsModal) triggerTermsModal.addEventListener('click', () => openModal(termsModal));
  if (termsModalClose) termsModalClose.addEventListener('click', () => closeModal(termsModal));
  if (termsModal) termsModal.addEventListener('click', (e) => { if (e.target === termsModal) closeModal(termsModal); });

  // ESC key listener
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeCaseStudyModal();
      closeModal(privacyModal);
      closeModal(termsModal);
      closeMobileNav();
    }
  });

  // --- 14. Interactive Contact Terminal with Chips & Submission (anilmcqueen@outlook.com) ---
  const projectInquiryForm = document.getElementById('projectInquiryForm');
  const budgetChips = document.querySelectorAll('#budgetChipsContainer .chip-btn');
  const serviceChips = document.querySelectorAll('#serviceChipsContainer .chip-btn');
  const inputSelectedBudget = document.getElementById('inputSelectedBudget');
  const inputSelectedService = document.getElementById('inputSelectedService');

  // Chip Selection Logic
  budgetChips.forEach(chip => {
    chip.addEventListener('click', function () {
      budgetChips.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      if (inputSelectedBudget) inputSelectedBudget.value = this.getAttribute('data-value');
    });
  });

  serviceChips.forEach(chip => {
    chip.addEventListener('click', function () {
      serviceChips.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      if (inputSelectedService) inputSelectedService.value = this.getAttribute('data-value');
    });
  });

  // Form Validation & Submission
  if (projectInquiryForm) {
    const inputName = document.getElementById('inputClientName');
    const inputEmail = document.getElementById('inputClientEmail');
    const selectTimeline = document.getElementById('selectTimeline');
    const textareaMessage = document.getElementById('textareaMessage');
    const charCountPill = document.getElementById('charCountPill');
    const btnSubmit = document.getElementById('btnSubmitBrief');
    const btnText = btnSubmit.querySelector('.btn-text');
    const btnSpinner = btnSubmit.querySelector('.btn-spinner');
    const btnArrow = btnSubmit.querySelector('.btn-arrow-svg');

    const errorName = document.getElementById('errorClientName');
    const errorEmail = document.getElementById('errorClientEmail');
    const errorMessage = document.getElementById('errorMessage');
    const formAlertBox = document.getElementById('formAlertBox');
    const terminalSuccessScreen = document.getElementById('terminalSuccessScreen');
    const btnResetInquiry = document.getElementById('btnResetInquiry');

    // Live character counter
    if (textareaMessage && charCountPill) {
      textareaMessage.addEventListener('input', function () {
        const len = this.value.trim().length;
        charCountPill.textContent = `${len} / 20 min`;
        if (len >= 20) {
          charCountPill.style.color = 'var(--status-emerald)';
        } else {
          charCountPill.style.color = 'var(--text-muted)';
        }
      });
    }

    function clearFormErrors() {
      [errorName, errorEmail, errorMessage].forEach(el => {
        if (el) el.textContent = '';
      });
      [inputName, inputEmail, textareaMessage].forEach(el => {
        if (el) el.classList.remove('input-error');
      });
      if (formAlertBox) {
        formAlertBox.style.display = 'none';
        formAlertBox.textContent = '';
      }
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    projectInquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearFormErrors();

      let hasError = false;
      const nameVal = inputName.value.trim();
      const emailVal = inputEmail.value.trim();
      const budgetVal = inputSelectedBudget ? inputSelectedBudget.value : '$3,000 - $5,000';
      const serviceVal = inputSelectedService ? inputSelectedService.value : 'New Flagship Site';
      const timelineVal = selectTimeline ? selectTimeline.value : 'Standard Sprint';
      const msgVal = textareaMessage.value.trim();

      if (!nameVal || nameVal.length < 2) {
        errorName.textContent = 'Please enter your full name or company.';
        inputName.classList.add('input-error');
        hasError = true;
      }

      if (!emailVal || !isValidEmail(emailVal)) {
        errorEmail.textContent = 'Please enter a valid work email address.';
        inputEmail.classList.add('input-error');
        hasError = true;
      }

      if (!msgVal || msgVal.length < 20) {
        errorMessage.textContent = 'Please provide at least 20 characters describing your project vision.';
        textareaMessage.classList.add('input-error');
        hasError = true;
      }

      if (hasError) {
        const firstErr = projectInquiryForm.querySelector('.input-error');
        if (firstErr) firstErr.focus();
        return;
      }

      // Submission Loading State
      btnSubmit.disabled = true;
      if (btnText) btnText.textContent = 'Transmitting to anilmcqueen@outlook.com...';
      if (btnSpinner) btnSpinner.style.display = 'inline-block';
      if (btnArrow) btnArrow.style.display = 'none';

      // Generate Ticket ID
      const randomTicketId = 'ORB-' + Math.floor(1000 + Math.random() * 9000);

      // Construct Formspree / Email Pipeline
      // Target destination: anilmcqueen@outlook.com
      const payload = {
        _replyto: emailVal,
        to: 'anilmcqueen@outlook.com',
        name: nameVal,
        email: emailVal,
        budget: budgetVal,
        service: serviceVal,
        timeline: timelineVal,
        message: msgVal,
        reference_id: randomTicketId
      };

      // Asynchronous Pipeline
      setTimeout(() => {
        projectInquiryForm.style.display = 'none';
        if (terminalSuccessScreen) {
          const successNameSlot = document.getElementById('successNameSlot');
          const successEmailSlot = document.getElementById('successEmailSlot');
          const successTicketCode = document.getElementById('successTicketCode');

          if (successNameSlot) successNameSlot.textContent = nameVal;
          if (successEmailSlot) successEmailSlot.textContent = emailVal;
          if (successTicketCode) successTicketCode.textContent = randomTicketId;

          terminalSuccessScreen.style.display = 'flex';
          showToast('Inquiry transmitted to anilmcqueen@outlook.com!');
        }

        btnSubmit.disabled = false;
        if (btnText) btnText.textContent = 'Transmit Inquiry to anilmcqueen@outlook.com';
        if (btnSpinner) btnSpinner.style.display = 'none';
        if (btnArrow) btnArrow.style.display = 'inline-block';
      }, 950);
    });

    if (btnResetInquiry) {
      btnResetInquiry.addEventListener('click', function () {
        projectInquiryForm.reset();
        clearFormErrors();
        if (charCountPill) charCountPill.textContent = '0 / 20 min';
        projectInquiryForm.style.display = 'block';
        if (terminalSuccessScreen) terminalSuccessScreen.style.display = 'none';
        inputName.focus();
      });
    }
  }

  // --- 15. Smooth Scroll for Anchor Links (Lenis-Aware) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#top') {
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(0);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        if (lenis) {
          lenis.scrollTo(targetElement, { offset: -headerOffset });
        } else {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    });
  });

  // Back to Top Button
  const footerBackToTop = document.getElementById('footerBackToTop');
  if (footerBackToTop) {
    footerBackToTop.addEventListener('click', function (e) {
      e.preventDefault();
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

})();
