// Content stays visible unless a supported observer can reveal it on entry.
export default {
  inserted(el) {
    if (!window.IntersectionObserver || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const reveal = () => {
      el.classList.remove('reveal-pending');
      el._revealObserver.disconnect();
    };
    el._revealObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) reveal();
    }, { rootMargin: '0px 0px -24px 0px' });
    el.classList.add('reveal', 'reveal-pending');
    el._revealOnFocus = reveal;
    el.addEventListener('focusin', reveal);
    el._revealObserver.observe(el);
  },
  unbind(el) {
    if (el._revealObserver) el._revealObserver.disconnect();
    if (el._revealOnFocus) el.removeEventListener('focusin', el._revealOnFocus);
  }
};
