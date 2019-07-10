/*var openButton = document.getElementById('menu-open');
var desktopMenu = document.getElementById('dropdownmenu');


function showMenu() {
  desktopMenu.classList.remove('hide');
}

function hideMenu () {
  desktopMenu.classList.add('hide');
} */

var openButton = document.getElementsByClassName('menu-open');
var desktopMenu = document.getElementsByClassName('dropdownmenu');

function showMenu () {
  desktopMenu.removeAttribute("id", "hide");
}

function hideMenu () {
  desktopMenu.setAttribute("id", "hide");
}


openButton.addEventListener('mouseenter', showMenu);
openButton.addEventListener('click', hideMenu);
