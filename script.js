const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

const progress = document.querySelector('.progress-bar');
const backTop = document.querySelector('.back-top');
const updateScrollUI = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
  backTop?.classList.toggle('visible', window.scrollY > 500);
};
window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav-link')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => sectionObserver.observe(section));

// Rotating role text: each complete phrase stays readable for two seconds.
const typedRole = document.querySelector('#typedRole');
if (typedRole) {
  const roles = ['student developer', 'curious problem-solver', 'lifelong learner'];
  let roleIndex = 0;
  typedRole.textContent = roles[0];
  if (!reduceMotion) {
    const showNextRole = () => {
      window.setTimeout(() => {
        typedRole.classList.add('role-is-changing');
        window.setTimeout(() => {
          roleIndex = (roleIndex + 1) % roles.length;
          typedRole.textContent = roles[roleIndex];
          typedRole.classList.remove('role-is-changing');
          showNextRole();
        }, 380);
      }, 2000);
    };
    showNextRole();
  }
}

// Filter the project cards without reloading the page.
const filterButtons = [...document.querySelectorAll('.filter-btn')];
const projectCards = [...document.querySelectorAll('.project-card[data-category]')];

// Keep the last row of project cards full, whichever filter is active.
const layoutProjects = () => {
  const visibleCards = projectCards.filter(card => !card.classList.contains('is-hidden'));
  const width = window.innerWidth;
  const columns = width > 1100 ? 3 : width > 650 ? 2 : 1;
  projectCards.forEach(card => card.removeAttribute('data-fill'));
  const rest = visibleCards.length % columns;
  if (columns === 1 || rest === 0) return;
  if (rest === 1) visibleCards[visibleCards.length - 1].dataset.fill = 'full';
  else visibleCards.slice(-2).forEach(card => { card.dataset.fill = 'half'; });
};
let layoutFrame;
window.addEventListener('resize', () => {
  cancelAnimationFrame(layoutFrame);
  layoutFrame = requestAnimationFrame(layoutProjects);
}, { passive: true });
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    projectCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !show);
      if (show) card.classList.add('visible');
    });
    layoutProjects();
  });
});
layoutProjects();

// Subtle pointer tilt on desktop; disabled for touch and reduced-motion users.
if (!reduceMotion && window.matchMedia('(pointer:fine)').matches) {
  projectCards.forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg) translateY(-5px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}

const glow = document.querySelector('.cursor-glow');
if (glow && window.matchMedia('(pointer:fine)').matches && !reduceMotion) {
  window.addEventListener('pointermove', event => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }, { passive: true });
}


// Certifications: the preview on the left follows the row the person points at.
const certRows = [...document.querySelectorAll('.cert')];
const certImages = [...document.querySelectorAll('.cert-preview-stage img')];
const certCounter = document.querySelector('#certCounter');
const certCaption = document.querySelector('#certCaption');
const certDate = document.querySelector('#certDate');
const showCert = index => {
  if (!certImages[index] || !certRows[index]) return;
  certImages.forEach((image, i) => image.classList.toggle('is-active', i === index));
  certRows.forEach((row, i) => row.classList.toggle('is-current', i === index));
  if (certCounter) certCounter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(certRows.length).padStart(2, '0')}`;
  if (certCaption) certCaption.textContent = certRows[index].querySelector('h3')?.textContent ?? '';
  if (certDate) certDate.textContent = certRows[index].querySelector('.cert-date')?.textContent ?? '';
};
certRows.forEach((row, index) => {
  row.addEventListener('pointerenter', () => showCert(index));
  row.addEventListener('focusin', () => showCert(index));
});
showCert(0);
