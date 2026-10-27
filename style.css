// 1. Target Element Selection (HTML -> JS)
const yearSpan = document.getElementById('year');
const themeBtn = document.getElementById('theme-btn');
const contactBtn = document.getElementById('contact-btn');
const contactMsg = document.getElementById('contact-msg');

// 2. Dynamic Content Injection (JS -> HTML)
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// 3. Event Handling and Class Toggling (JS -> HTML/CSS)
// Toggles .dark-mode (defined in style.css) on the <body> tag
function applyTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  if (themeBtn) {
    // The button always offers the opposite mode
    themeBtn.textContent = isDark ? 'Light mode' : 'Dark mode';
  }
}

// Use the saved choice if there is one, otherwise follow the device setting
let savedTheme = null;
try {
  savedTheme = localStorage.getItem('theme');
} catch (error) {
  // Storage can be blocked (for example in private mode); the page still works
}
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    applyTheme(isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (error) {
      // Ignore: the choice just won't be remembered
    }
  });
}

// 4. Interactive Feedback
if (contactBtn && contactMsg) {
  contactBtn.addEventListener('click', () => {
    contactMsg.textContent = 'Thanks for reaching out! The contact form is coming soon.';
  });
}
