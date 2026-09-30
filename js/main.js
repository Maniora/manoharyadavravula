/**
 * RAVULA MANOHAR YADAV — MAIN CONTROLLER & INTERACTION UTILITIES
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCopyEmailBtn();
});

/**
 * Mobile Drawer Menu Handler
 */
function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const menuIcon = document.getElementById('menu-icon');

  if (!menuToggle || !mobileDrawer) return;

  function toggleMenu(show) {
    const isExpanded = show !== undefined ? show : menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    
    if (isExpanded) {
      mobileDrawer.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      if (menuIcon) {
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`;
      }
    } else {
      mobileDrawer.classList.add('hidden');
      document.body.style.overflow = '';
      if (menuIcon) {
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>`;
      }
    }
  }

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close drawer if clicking outside content
  mobileDrawer.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) {
      toggleMenu(false);
    }
  });

  // Close drawer on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      toggleMenu(false);
    }
  });
}

/**
 * Copy Email Toast Notification
 */
function initCopyEmailBtn() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  const emailText = "ravulamanohar8@gmail.com";

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(emailText).then(() => {
        showToast(`Email copied: ${emailText}`);
      }).catch(() => {
        showToast(`Contact: ${emailText}`);
      });
    });
  });
}

/**
 * Toast Notification Trigger
 */
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-message');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
