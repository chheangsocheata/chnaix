// call navbar to each file
// Function to load the navbar
function loadNavbar() {
  fetch('nav.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('navbar').innerHTML = data;
      initNavbar(); // Re-initialize the navbar after it's loaded
    });
}
// small navbar active and text effect
// Function to initialize the navbar (especially the mobile menu toggle )
function initNavbar() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuItems = mobileMenu.querySelectorAll('a');
  let isOpen = false;

  menuToggle?.addEventListener('click', () => {
    if (!isOpen) {
      // Open the menu with slide down effect
      mobileMenu.classList.remove('max-h-0');
      mobileMenu.classList.add('max-h-screen');

      // Reveal each item with a delay
      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('opacity-100', 'translate-y-0');
          item.classList.remove('opacity-0', '-translate-y-4');
        }, index * 300);
      });
      isOpen = true;
    } else {
      // Hide each item before closing the menu
      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('opacity-0', '-translate-y-4');
          item.classList.remove('opacity-100', 'translate-y-0');
        }, index * 200);
      });

      // Slide up the menu after the text is hidden
      setTimeout(() => {
        mobileMenu.classList.remove('max-h-screen');
        mobileMenu.classList.add('max-h-0');
      }, menuItems.length * 200);
      isOpen = false;
    }
  });
}

// Footer for all file
// Load the Footer when the page loads
window.addEventListener('load', loadNavbar, loadFooter);

function loadFooter() {
  fetch('footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('footer').innerHTML = data;
      initFooter(); // Re-initialize the navbar after it's loaded
    });
}
window.addEventListener('load', loadFooter);
