const checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', ({ target }) => {
  target.checked ? initDarkMode() : initLightMode();
});

function initDarkMode() {
  console.log('Dark mode in function');
  document.body.classList.add('dark');
}

function initLightMode() {
  console.log('Light Theme in function');
  document.body.classList.remove('dark');
}
