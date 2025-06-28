// modules/module-f-floating-icon/script.js

console.log('✅ module-f script loaded and executing');

function createBadge() {
  // Check if badge already exists to prevent duplicates
  if (document.querySelector('.mod-f-hello')) {
    console.log('Badge already exists, skipping creation');
    return;
  }

  // Create the badge element
  const badge = document.createElement('div');
  badge.className = 'mod-f-hello';

  // ← Change your message here:
  badge.textContent = 'BAM BAM';

  // (Optional) Add click behavior
  badge.addEventListener('click', () => {
    console.log('Badge clicked!');
  });

  // Ensure document.body exists before appending
  if (document.body) {
    document.body.appendChild(badge);
    console.log('✅ Badge created and appended to body');
  } else {
    console.error('❌ document.body not available');
  }
}

// Multiple timing strategies to ensure the badge gets created
if (document.readyState === 'loading') {
  // DOM still loading (unlikely in Squarespace footer)
  document.addEventListener('DOMContentLoaded', createBadge);
} else {
  // DOM already loaded (most common case)
  createBadge();
}

// Fallback timing for safety
setTimeout(createBadge, 100);
setTimeout(createBadge, 500);