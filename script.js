(() => {
  // ---------- Theme toggle (persisted) ----------
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const prefersLight = matchMedia('(prefers-color-scheme: light)').matches;
  const initial = saved || (prefersLight ? 'light' : 'dark');
  root.setAttribute('data-theme', initial);

  const toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // ---------- Mobile nav burger ----------
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav-burger');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('.nav-links a').forEach((a) =>
      a.addEventListener('click', () => nav.classList.remove('open'))
    );
  }

  // ---------- Reveal on scroll ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

  // ---------- Service card spotlight ----------
  document.querySelectorAll('.service-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
    });
  });

  // ---------- Active nav link ----------
  const path = location.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  document.querySelectorAll('.nav-links a').forEach((a) => {
    const href = a.getAttribute('href').replace(/\.html$/, '').replace(/\/$/, '');
    if (href && (path.endsWith(href) || (href === '/' && path === '/'))) {
      a.classList.add('active');
    }
  });

  // ---------- Year ----------
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // ---------- Form (client-side only) ----------
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      const body = `Hi Kirill,%0D%0A%0D%0AName: ${data.name}%0D%0AService: ${data.service}%0D%0A%0D%0A${data.message}`;
      location.href = `mailto:zhscherry@gmail.com?subject=Portfolio enquiry from ${encodeURIComponent(data.name)}&body=${body}`;
    });
  }
})();
