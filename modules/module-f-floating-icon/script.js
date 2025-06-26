document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.mod-f-hello');
  if (el) {
    el.addEventListener('click', () => console.log('Hello clicked!'));
  }
});
