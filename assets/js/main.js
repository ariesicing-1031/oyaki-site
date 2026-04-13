
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.global-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
    const expanded = nav.classList.contains('is-open');
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.faq-item').forEach(item => {
  const button = item.querySelector('.faq-question');
  if (!button) return;
  button.addEventListener('click', () => {
    item.classList.toggle('is-open');
  });
});
