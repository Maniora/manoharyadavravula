/**
 * RAVULA MANOHAR YADAV — PROJECTS DATA & MODAL CONTROLLER
 */

const PROJECTS_DATA = {
  "maniora-studio": {
    id: "maniora-studio",
    number: "01",
    name: "MANIORA STUDIO",
    category: "B2B2C SAAS PLATFORM",
    tagline: "Full-stack SaaS ecosystem for photography studios with gallery workflows, contract management, and multi-tenant accounts.",
    liveUrl: null,
    githubUrl: null,
    overview: "MANIORA STUDIO is a comprehensive multi-tenant SaaS application engineered to streamline business operations for photography studios and creative agencies. The platform covers client onboarding, gallery sharing, automated invoicing, digital contract signing, and client management.",
    role: "Architect & Lead Full Stack Developer — Designed and implemented full-stack architecture, REST APIs, database schemas, authentication, payment integration, and cloud deployment.",
    features: [
      "Multi-tenant architecture separating studio workspaces and data isolation.",
      "Digital & live photo galleries with high-resolution image delivery and client selection.",
      "Contract management with electronic signatures and client approval tracking.",
      "Automated invoicing and payment processing via Razorpay integration.",
      "Role-Based Access Control (RBAC) for studio admins, team members, and clients.",
      "Mobile-responsive client viewing portal optimized for fast image loading."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Razorpay API", "JWT Auth"],
    badge: "FEATURED SAAS"
  },
  "maniora-dm-automation": {
    id: "maniora-dm-automation",
    number: "02",
    name: "MANIORA DM AUTOMATION",
    category: "INSTAGRAM AUTOMATION SAAS",
    tagline: "Instagram automation platform integrating Meta/Instagram APIs for direct messaging and automated workflow triggers.",
    liveUrl: "https://chat.maniora.in/",
    githubUrl: null,
    overview: "MANIORA DM AUTOMATION is an Instagram interaction and messaging engine built on top of official Meta Graph APIs. It enables businesses and creators to automate comment responses, DM keyword triggers, lead capture sequences, and follow-up messaging workflows.",
    role: "Full Stack Developer — Engineered Meta Webhook consumers, background job queues, rate-limiting handlers, token management, and administrative portal.",
    features: [
      "Official Meta Graph API integration with secure OAuth token renewal.",
      "Real-time Instagram comment detection via Webhook listeners.",
      "Automated direct messaging (DM) dispatch with keyword matching.",
      "Queue management to ensure adherence to Meta API rate limits.",
      "Contact lead capturing and database indexing for follow-ups.",
      "Analytics dashboard monitoring trigger counts and execution logs."
    ],
    techStack: ["Node.js", "Express.js", "Meta Graph API", "MongoDB", "Webhooks", "JavaScript", "Linux / VPS"],
    badge: "AUTOMATION ENGINE"
  },
  "pixelfable18": {
    id: "pixelfable18",
    number: "03",
    name: "PIXELFABLE18",
    category: "E-COMMERCE PLATFORM",
    tagline: "Digital products e-commerce platform with product catalog, secure checkout, Razorpay, and instant digital file delivery.",
    liveUrl: "https://pixelfable18.in/",
    githubUrl: null,
    overview: "PIXELFABLE18 is a specialized e-commerce web platform created for selling digital assets and photo presets. It provides an intuitive storefront for customers and a full management portal for product inventory, order verification, and digital delivery.",
    role: "Full Stack Developer — Built end-to-end e-commerce flow including cart management, payment webhooks, database relations, and instant SMTP email file delivery.",
    features: [
      "Custom product catalog with detailed preview media and pricing.",
      "Streamlined shopping cart and checkout pipeline.",
      "Secure payment gateway integration with Razorpay.",
      "Instant automated email delivery of digital download links via SMTP.",
      "Protected admin panel for inventory, sales analytics, and manual order updates.",
      "Mobile-optimized responsive user experience."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay API", "Nodemailer / SMTP"],
    badge: "E-COMMERCE"
  },
  "sortifyyy": {
    id: "sortifyyy",
    number: "04",
    name: "NUMBER SORTING SYSTEM",
    category: "BUSINESS DATA PROCESSING",
    tagline: "High-volume data processing platform for classifying mobile datasets by telecom prefix, operator, and region.",
    liveUrl: "https://sortifyy.cloud/",
    githubUrl: null,
    overview: "A specialized business data utility built to handle, clean, and categorize tens of thousands of contact numbers. The platform parses uploaded Excel files, strips duplicates, tags telecom operators, and organizes regional databases for operational teams.",
    role: "Full Stack Developer — Built database schema, file parsing engine, query optimization, pagination, and multi-user administrative system.",
    features: [
      "Bulk Excel dataset uploading and automated row parsing.",
      "Duplicate number detection and data cleansing algorithms.",
      "Telecom operator and circle/region mapping by mobile prefix.",
      "Advanced multi-parameter search, filtering, and pagination.",
      "Lead follow-up status tracking for operational staff.",
      "Export capability back into standardized Excel / CSV reports."
    ],
    techStack: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "Spreadsheet Parsers"],
    badge: "ENTERPRISE TOOL"
  },
  "kahani-crew": {
    id: "kahani-crew",
    number: "05",
    name: "THE KAHANI CREW",
    category: "EVENT MANAGEMENT & PHOTOGRAPHY",
    tagline: "High-performance brand showcase website for an event management and photography production studio.",
    liveUrl: "https://thekahanicrew.com/",
    githubUrl: null,
    overview: "A custom web application built for The Kahani Crew to present event portfolios, wedding stories, and creative services. The design focuses on rich visual storytelling, ultra-fast image loading, and effortless client contact.",
    role: "Frontend Developer & Designer — Designed custom layout, image compression pipeline, interactive gallery filters, and mobile experience.",
    features: [
      "Editorial masonry visual galleries with fluid image popups.",
      "Responsive layout optimized across desktop, tablet, and mobile screens.",
      "Custom event category filtering and story previews.",
      "Fast page loads with lazy-loaded media assets.",
      "Integrated booking inquiry forms."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Design"],
    badge: "PORTFOLIO SITE"
  },
  "4kmedia": {
    id: "4kmedia",
    number: "06",
    name: "4KMEDIA",
    category: "DIGITAL MARKETING AGENCY",
    tagline: "Custom agency website featuring interactive graphics, structured service breakdowns, and conversion funnels.",
    liveUrl: "https://4kmedia.in/",
    githubUrl: null,
    overview: "Official digital presence for 4KMedia digital marketing agency. The site showcases agency services, client case studies, and marketing packages with custom illustrations and engaging micro-interactions.",
    role: "Frontend Engineer — Implemented responsive UI components, service showcases, smooth animations, and lead capture forms.",
    features: [
      "Interactive agency service grid and strategic marketing breakdowns.",
      "Animated custom graphics and hero elements.",
      "Clean corporate typography and visual brand consistency.",
      "Optimized performance and SEO metadata structure."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "SEO Optimization"],
    badge: "AGENCY SITE"
  }
};

/**
 * Open Modal with Project Data
 */
function openProjectModal(projectId) {
  const data = PROJECTS_DATA[projectId];
  if (!data) return;

  const backdrop = document.getElementById('project-modal');
  const modalName = document.getElementById('modal-project-name');
  const modalNum = document.getElementById('modal-project-number');
  const modalCategory = document.getElementById('modal-project-category');
  const modalTagline = document.getElementById('modal-project-tagline');
  const modalOverview = document.getElementById('modal-project-overview');
  const modalRole = document.getElementById('modal-project-role');
  const modalFeatures = document.getElementById('modal-project-features');
  const modalTech = document.getElementById('modal-project-tech');
  const modalLiveBtn = document.getElementById('modal-project-live');

  modalName.textContent = data.name;
  modalNum.textContent = data.number;
  modalCategory.textContent = data.category;
  modalTagline.textContent = data.tagline;
  modalOverview.textContent = data.overview;
  modalRole.textContent = data.role;

  // Render Features list
  modalFeatures.innerHTML = data.features.map(feat => `
    <li class="flex items-start gap-3 text-sm text-neutral-300">
      <span class="text-red-500 mt-1">▸</span>
      <span>${feat}</span>
    </li>
  `).join('');

  // Render Tech Stack tags
  modalTech.innerHTML = data.techStack.map(tech => `
    <span class="px-3 py-1 text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 rounded">
      ${tech}
    </span>
  `).join('');

  // Configure Live Button
  if (data.liveUrl) {
    modalLiveBtn.href = data.liveUrl;
    modalLiveBtn.style.display = "inline-flex";
  } else {
    modalLiveBtn.style.display = "none";
  }

  // Activate Modal
  backdrop.classList.add('is-active');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus trap focus to close button
  const closeBtn = document.getElementById('close-modal-btn');
  if (closeBtn) closeBtn.focus();
}

/**
 * Close Modal
 */
function closeProjectModal() {
  const backdrop = document.getElementById('project-modal');
  if (!backdrop) return;
  backdrop.classList.remove('is-active');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Global Event Listeners for Modal
document.addEventListener('DOMContentLoaded', () => {
  const backdrop = document.getElementById('project-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeProjectModal);
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeProjectModal();
      }
    });
  }

  // Keyboard Esc Listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop && backdrop.classList.contains('is-active')) {
      closeProjectModal();
    }
  });
});
