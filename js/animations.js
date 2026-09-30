/**
 * RAVULA MANOHAR YADAV — ANIMATIONS & SYSTEM MAP GRAPHIC
 */

document.addEventListener('DOMContentLoaded', () => {
  initSystemMapHover();
  initScrollObservers();
  initNavbarScrollState();
  initActiveSectionNav();
});

/**
 * 1. HERO SYSTEM MAP INTERACTION
 */
function initSystemMapHover() {
  const nodes = document.querySelectorAll('.system-map-node');
  const telemetryOutput = document.getElementById('telemetry-details');

  const telemetryInfo = {
    'node-idea': '1. IDEA & PLANNING — Mapping user needs and sketching product flows before touching code.',
    'node-architecture': '2. ARCHITECTURE — Designing database schemas, REST API endpoints, and auth flows.',
    'node-frontend': '3. FRONTEND — Crafting fast, clean, responsive interfaces with React.js and Tailwind CSS.',
    'node-api': '4. REST API — Writing secure Node.js & Express endpoints with clean validation.',
    'node-database': '5. DATABASE — Modeling data with MongoDB and MySQL for fast queries.',
    'node-deployment': '6. DEPLOYMENT — Hosting on VPS servers with NGINX, SSL certificates, and CI/CD.'
  };

  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      const nodeId = node.getAttribute('data-node-id');
      if (telemetryOutput && telemetryInfo[nodeId]) {
        telemetryOutput.textContent = telemetryInfo[nodeId];
        telemetryOutput.classList.add('text-red-400');
      }
    });

    node.addEventListener('mouseleave', () => {
      if (telemetryOutput) {
        telemetryOutput.textContent = 'Hover or tap any step above to see how I build products end-to-end.';
        telemetryOutput.classList.remove('text-red-400');
      }
    });
  });
}

/**
 * 2. SCROLL REVEAL OBSERVER
 */
function initScrollObservers() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * 3. NAVBAR STICKY BACKDROP STATE
 */
function initNavbarScrollState() {
  const navbar = document.getElementById('main-nav');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('backdrop-blur-md', 'bg-neutral-950/85', 'border-neutral-800/80', 'shadow-lg');
      navbar.classList.remove('border-transparent');
    } else {
      navbar.classList.remove('backdrop-blur-md', 'bg-neutral-950/85', 'border-neutral-800/80', 'shadow-lg');
      navbar.classList.add('border-transparent');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 4. ACTIVE SECTION HIGHLIGHT IN NAV
 */
function initActiveSectionNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-red-400', 'font-semibold');
            link.classList.remove('text-neutral-400');
          } else {
            link.classList.remove('text-red-400', 'font-semibold');
            link.classList.add('text-neutral-400');
          }
        });
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach(sec => observer.observe(sec));
}
