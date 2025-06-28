// script.js – Fixed version with proper timing and positioning
console.log('✅ badge script executing');

function createBadge() {
  // Check if badge already exists to prevent duplicates
  if (document.querySelector('.mod-f-hello')) {
    console.log('Badge already exists, skipping creation');
    return;
  }

  const badge = document.createElement('div');
  badge.className = 'mod-f-hello';
  badge.textContent = 'Upward Advisors'; // editable text
  
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
  // DOM still loading
  document.addEventListener('DOMContentLoaded', createBadge);
} else {
  // DOM already loaded
  createBadge();
}

// Fallback timing
setTimeout(createBadge, 100);
setTimeout(createBadge, 500);