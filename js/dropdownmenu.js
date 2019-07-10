var openButton = document.getElementById('menu-open');
var desktopMenu = document.getElementById('dropdownmenu');
var heyCool = document.querySelectorAll('li');


function showMenu() {
  desktopMenu.classList.remove('hide');
}

function hideMenu () {
  desktopMenu.classList.add('hide');
}


openButton.addEventListener('mouseenter', showMenu);
openButton.addEventListener('click', hideMenu);
