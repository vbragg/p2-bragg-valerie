/*var openButton = document.getElementById('menu-open');
var desktopMenu = document.getElementById('dropdownmenu');


function showMenu() {
  desktopMenu.classList.remove('hide');
}

function hideMenu () {
  desktopMenu.classList.add('hide');
} */

var openButton = document.querySelectorAll('.desktopmenu button');
var desktopMenu = document.querySelectorAll('.desktopmenu ul');

function showMenu () {
  desktopMenu.removeAttribute("id");
}

function hideMenu () {
  desktopMenu.setAttribute("id", "hide");
}


openButton.addEventListener('mouseenter', showMenu);
openButton.addEventListener('click', hideMenu);
