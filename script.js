(() => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Custom cursor
  const cursor = document.querySelector('.cursor');
  if (cursor && matchMedia('(hover: hover)').matches) {
    let x = 0, y = 0, tx = 0, ty = 0;
    addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    loop();

    document.querySelectorAll('a, button, .service-card, .project').forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  // Split hero text into words for stagger animation (preserves <br>)
  document.querySelectorAll('[data-split]').forEach((el) => {
    const nodes = Array.from(el.childNodes);
    el.innerHTML = '';
    nodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/\s+/.test(part)) { el.appendChild(document.createTextNode(part)); return; }
          const span = document.createElement('span');
          span.className = 'word';
          span.textContent = part;
          el.appendChild(span);
        });
      } else {
        el.appendChild(node);
      }
    });
  });

  // Intersection observer reveals
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('[data-reveal], [data-split]').forEach((el) => io.observe(el));

  // Hero tags subtle parallax on mouse move
  const hero = document.querySelector('.hero');
  const tags = document.querySelector('.hero-tags');
  if (hero && tags) {
    hero.addEventListener('mousemove', (e) => {
      const r = hero.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top) / r.height - 0.5;
      tags.style.transform = `translate(${dx * 20}px, ${dy * 10}px)`;
    });
    hero.addEventListener('mouseleave', () => { tags.style.transform = ''; });
  }
})();
