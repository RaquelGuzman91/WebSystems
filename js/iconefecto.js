const icon = document.querySelector('.icon');
icon.addEventListener('click', () => {
  icon.classList.add('animate');
  setTimeout(() => icon.classList.remove('animate'), 600);
});