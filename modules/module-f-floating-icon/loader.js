// loader.js – loads your CSS and JS fresh every time (no cache)

(async () => {
  // 1) Fetch the latest CSS
  try {
    const cssResp = await fetch(
      'https://raw.githubusercontent.com/FinWell-Business-Technology-Solutions/Upward/main/modules/module-f-floating-icon/style.css',
      { cache: 'no-cache' }
    );
    if (cssResp.ok) {
      const css = await cssResp.text();
      const styleEl = document.createElement('style');
      styleEl.textContent = css;
      document.head.appendChild(styleEl);
    } else {
      console.error('Failed to load badge CSS', cssResp.status);
    }
  } catch (e) {
    console.error('Error fetching badge CSS', e);
  }

  // 2) Fetch and run the latest JS
  try {
    const jsResp = await fetch(
      'https://raw.githubusercontent.com/FinWell-Business-Technology-Solutions/Upward/main/modules/module-f-floating-icon/script.js',
      { cache: 'no-cache' }
    );
    if (jsResp.ok) {
      const jsText = await jsResp.text();
      // Evaluate it in global scope
      new Function(jsText)();
    } else {
      console.error('Failed to load badge JS', jsResp.status);
    }
  } catch (e) {
    console.error('Error fetching badge JS', e);
  }
})();
