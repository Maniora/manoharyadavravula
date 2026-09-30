/**
 * RAVULA MANOHAR YADAV — PROJECTS DATA & MODAL CONTROLLER
 */

const PROJECTS_DATA = {
  "maniora-studio": {
    id: "maniora-studio",
    number: "01",
    name: "MANIORA STUDIO",
    category: "B2B2C SAAS PLATFORM",
    tagline: "Full-stack SaaS platform for photography studios with client galleries, contract signing, and automated invoices.",
    liveUrl: null,
    githubUrl: null,
    overview: "MANIORA STUDIO is a multi-tenant SaaS application built to help photography studios manage their daily business. Studios get their own portal to handle client bookings, share photo galleries, issue digital contracts, and send automated invoices.",
    role: "Full Stack Developer & Founder — Designed the database architecture, REST APIs, authentication system, Razorpay payment flow, and responsive client portal.",
    features: [
      "Multi-tenant architecture separating studio accounts and client data safely.",
      "Digital galleries where clients can view, select, and download high-res photos.",
      "Contract management with electronic signatures for client sign-offs.",
      "Automated invoicing and online payment processing via Razorpay.",
      "Role-Based Access Control (RBAC) for studio owners, team members, and clients.",
      "Fast mobile photo viewer built for smooth mobile browsing."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Razorpay API", "JWT Auth"],
    badge: "FEATURED SAAS"
  },
  "maniora-dm-automation": {
    id: "maniora-dm-automation",
    number: "02",
    name: "MANIORA DM AUTOMATION",
    category: "INSTAGRAM AUTOMATION SAAS",
    tagline: "Instagram messaging platform that automates comment replies and DM workflows using Meta APIs.",
    liveUrl: "https://chat.maniora.in/",
    githubUrl: null,
    overview: "MANIORA DM AUTOMATION is an Instagram automation tool built on official Meta Graph APIs. It helps creators and businesses automatically reply to post comments, send direct messages based on keywords, and capture incoming leads.",
    role: "Full Stack Developer — Built real-time Meta Webhook listeners, message dispatch queues, token renewal logic, and administrative dashboard.",
    features: [
      "Official Meta Graph API integration with OAuth token management.",
      "Real-time comment detection via Meta Webhooks.",
      "Instant DM responses based on predefined keyword triggers.",
      "Rate-limit queue handling to comply with Meta API guidelines.",
      "Lead capture database for following up with interested clients.",
      "Dashboard tracking message delivery stats and trigger logs."
    ],
    techStack: ["Node.js", "Express.js", "Meta Graph API", "MongoDB", "Webhooks", "JavaScript", "Linux / VPS"],
    badge: "AUTOMATION ENGINE"
  },
  "pixelfable18": {
    id: "pixelfable18",
    number: "03",
    name: "PIXELFABLE18",
    category: "E-COMMERCE PLATFORM",
    tagline: "Digital products store for selling Lightroom presets with instant file delivery upon payment.",
    liveUrl: "https://pixelfable18.in/",
    githubUrl: null,
    overview: "PIXELFABLE18 is an e-commerce platform built for selling digital photo presets and assets. Customers can browse preset packs, pay securely online, and receive download links instantly in their email.",
    role: "Full Stack Developer — Built storefront interface, shopping cart, payment integration, admin panel, and automated email delivery system.",
    features: [
      "Clean product store showcasing preset previews and pricing.",
      "Smooth shopping cart and checkout experience.",
      "Secure online payment gateway integration using Razorpay.",
      "Instant automated email delivery of digital download links after purchase.",
      "Admin dashboard to manage products, view sales, and check orders.",
      "Responsive design optimized for mobile buyers."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay API", "Nodemailer / SMTP"],
    badge: "E-COMMERCE"
  },
  "sortifyyy": {
    id: "sortifyyy",
    number: "04",
    name: "NUMBER SORTING SYSTEM",
    category: "BUSINESS DATA PROCESSING",
    tagline: "Business tool for processing, cleaning, and sorting large lists of mobile numbers by operator and region.",
    liveUrl: "https://sortifyy.cloud/",
    githubUrl: null,
    overview: "A custom business utility built to process tens of thousands of contact numbers efficiently. Teams can upload Excel files, clean duplicate numbers, identify mobile operators, and filter data by region for marketing campaigns.",
    role: "Full Stack Developer — Created the database schema, Excel parsing engine, search filters, pagination, and multi-user dashboard.",
    features: [
      "Bulk Excel file parsing and data extraction.",
      "Duplicate number detection and automatic data cleaning.",
      "Telecom operator and regional circle mapping by mobile prefix.",
      "Fast search, filtering, and paginated data tables.",
      "Follow-up status tracking for sales and operations teams.",
      "Export sorted datasets back into clean Excel/CSV files."
    ],
    techStack: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "Spreadsheet Parsers"],
    badge: "ENTERPRISE TOOL"
  },
  "kahani-crew": {
    id: "kahani-crew",
    number: "05",
    name: "THE KAHANI CREW",
    category: "EVENT MANAGEMENT & PHOTOGRAPHY",
    tagline: "Custom brand website built to showcase event portfolios and wedding stories.",
    liveUrl: "https://thekahanicrew.com/",
    githubUrl: null,
    overview: "A custom website created for The Kahani Crew event management studio. The site showcases wedding photography, event highlights, and creative services with fast image loading and mobile-friendly layouts.",
    role: "Frontend Developer & Designer — Designed the layout, image compression flow, gallery filters, and mobile experience.",
    features: [
      "Grid image galleries with full-screen lightboxes.",
      "Responsive layout built for desktop, tablet, and mobile screens.",
      "Category filtering for weddings, corporate events, and stories.",
      "Optimized images for fast loading speed.",
      "Simple booking inquiry form for prospective clients."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Design"],
    badge: "PORTFOLIO SITE"
  },
  "4kmedia": {
    id: "4kmedia",
    number: "06",
    name: "4KMEDIA",
    category: "DIGITAL MARKETING AGENCY",
    tagline: "Agency website with interactive service breakdowns and marketing funnels.",
    liveUrl: "https://4kmedia.in/",
    githubUrl: null,
    overview: "Official website for 4KMedia, a digital marketing agency in Hyderabad. The platform highlights marketing services, client work, and growth strategies with custom graphics and clear call-to-actions.",
    role: "Frontend Engineer — Developed responsive UI components, service breakdowns, interactive cards, and contact forms.",
    features: [
      "Interactive agency service grid explaining marketing strategies.",
      "Custom graphic illustrations and animated cards.",
      "Clean corporate design and typography.",
      "Optimized performance and fast page load times."
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
    <li class="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
      <span class="text-red-500 mt-0.5 sm:mt-1">▸</span>
      <span>${feat}</span>
    </li>
  `).join('');

  // Render Tech Stack tags
  modalTech.innerHTML = data.techStack.map(tech => `
    <span class="px-2.5 py-1 text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 rounded">
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
