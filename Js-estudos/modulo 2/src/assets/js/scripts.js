// functions

// function to open and close the menu
function openCloseMenu() {
  const menu = document.querySelector('.menu');
  const menuButton = document.querySelector('.menu-button');
  const menuClose = document.querySelector('.menu-close');

  menuButton.addEventListener('click', () => {
    menu.classList.add('active');
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
  });
}