// modules/module-f-floating-icon/loader.js
// One-and-done loader: fetches & injects your badge CSS + JS without caching

(async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/FinWell-Business-Technology-Solutions/Upward@main/modules/module-f-floating-icon';

  // 1) Fetch and inject CSS
  try {
    const resp = await fetch(`${baseUrl}/style.css`, { cache: 'reload' });
    if (!resp.ok) throw new Error(`Status ${resp.status}`);
    const cssText = await resp.text();
    const styleEl = document.createElement('style');
    styleEl.textContent = cssText;
    document.head.appendChild(styleEl);
    console.log('✅ Badge CSS injected');
  } catch (err) {
    console.error('❌ Badge CSS failed to load:', err);
  }

  // 2) Fetch and execute JS
  try {
    const resp = await fetch(`${baseUrl}/script.js`, { cache: 'reload' });
    if (!resp.ok) throw new Error(`Status ${resp.status}`);
    const jsText = await resp.text();
    console.log('✅ Badge JS fetched, executing…');
    new Function(jsText)();
  } catch (err) {
    console.error('❌ Badge JS failed to load:', err);
  }
})();
