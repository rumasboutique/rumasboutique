/* ==========================================================================
   রুমাস বুটিক (Ruma's Boutique) — script.js
   Vanilla JavaScript — কোনো লাইব্রেরি ছাড়া।
   --------------------------------------------------------------------------
   ১. মোবাইল মেনু (হ্যামবার্গার + ব্যাকড্রপ + Escape)
   ২. স্ক্রল ইফেক্ট (হেডার শ্যাডো, টু-টপ বাটন, স্ক্রল-স্পাই)
   ৩. স্ক্রল-রিভিল অ্যানিমেশন (IntersectionObserver)
   ৪. ফুটারে চলতি বছর (বাংলা সংখ্যায়)
   ========================================================================== */

(() => {
  'use strict';

  // JS চালু আছে বোঝাতে <html>-এ ক্লাস যোগ — CSS-এ .reveal শুধু তখনই লুকানো থাকে
  document.documentElement.classList.add('js');

  const header = document.getElementById('siteHeader');
  const toTop = document.getElementById('toTop');
  const navToggle = document.getElementById('navToggle');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const yearEl = document.getElementById('year');

  /* ---------- ১. মোবাইল মেনু ---------- */
  const setMenu = (open) => {
    document.body.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন');
    navBackdrop.hidden = !open;
  };

  navToggle.addEventListener('click', () => {
    setMenu(!document.body.classList.contains('nav-open'));
  });

  // ব্যাকড্রপে ক্লিক করলে মেনু বন্ধ
  navBackdrop.addEventListener('click', () => setMenu(false));

  // মেনুর কোনো লিংকে ক্লিক করলে মেনু বন্ধ
  navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));

  // Escape চাপলে মেনু বন্ধ
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
      setMenu(false);
      navToggle.focus();
    }
  });

  /* ---------- ২. স্ক্রল ইফেক্ট (rAF-থ্রটলসহ) ---------- */
  // নেভিগেশনে থাকা ৪টি সেকশন — DOM-এর ক্রম অনুযায়ী
  const spySections = ['#home', '#collection', '#about', '#contact']
    .map((sel) => document.querySelector(sel))
    .filter(Boolean);

  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY;

    // হেডারে শ্যাডো
    header.classList.toggle('scrolled', y > 10);

    // টু-টপ বাটন
    toTop.classList.toggle('show', y > 600);

    // স্ক্রল-স্পাই: যে সেকশনটি সবশেষে উপরের দিকে পার হয়েছে
    const probe = y + 90; // স্টিকি হেডারের নিচটা ধরতে সামান্য অফসেট
    let activeIndex = 0;
    spySections.forEach((sec, i) => {
      if (sec.offsetTop <= probe) activeIndex = i;
    });
    navLinks.forEach((link, i) => {
      link.classList.toggle('active', i === activeIndex);
    });

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  }, { passive: true });

  onScroll();

  // টু-টপ বাটনে ক্লিক
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- ৩. স্ক্রল-রিভিল অ্যানিমেশন ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el) => io.observe(el));
  } else {
    // পুরনো ব্রাউজার: সবকিছু সরাসরি দেখাও
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- ৪. চলতি বছর (বাংলা সংখ্যায়) ---------- */
  if (yearEl) {
    const toBnDigits = (n) => String(n).replace(/\d/g, (d) => '০১২৩৪৫৬৭৮৯'[d]);
    yearEl.textContent = toBnDigits(new Date().getFullYear());
  }
})();
