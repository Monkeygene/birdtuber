  // Toggle mobile menu visibility
const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  let isOpen = false;

  menuButton.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
      mobileMenu.classList.remove('max-h-0');
      mobileMenu.classList.add('max-h-40', 'py-4');
    } else {
      mobileMenu.classList.remove('max-h-40', 'py-4');
      mobileMenu.classList.add('max-h-0');
    }
  });
