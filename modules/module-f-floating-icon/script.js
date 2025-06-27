// modules/module-f-floating-icon/script.js

document.addEventListener('DOMContentLoaded', () => {
  // Confirm the script loaded
  console.log('✅ module-f script loaded');

  // Create the badge element
  const badge = document.createElement('div');
  badge.className = 'mod-f-hello';

  // ← Change your message here:
  badge.textContent = '_+Upward Advisors+_';

  // (Optional) Add click behavior
  badge.addEventListener('click', () => {
    console.log('Badge clicked!');
  });

  // Append to the page
  document.body.appendChild(badge);
});
