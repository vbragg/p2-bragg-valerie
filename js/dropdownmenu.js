/*var openButton = document.getElementById('menu-open');
var desktopMenu = document.getElementById('dropdownmenu');


function showMenu() {
  desktopMenu.classList.remove('hide');
}

function hideMenu () {
  desktopMenu.classList.add('hide');
} */

var openButton = document.querySelectorAll('.desktopmenu div.menu-open');
var desktopMenu = document.querySelectorAll('.desktopmenu ul');

function showMenu () {
  desktopMenu[0].classList.remove('hide');
}

function hideMenu () {
  desktopMenu[0].classList.add('hide');
}

for (i=0; i < openButton.length; i++) {
  openButton[i].addEventListener('mouseenter', showMenu);
  openButton[i].addEventListener('mouseleave', hideMenu);

}




/* function loopThrough() {

  const changeColor = () => this.classList.toggle('teal');

  for(let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  };

};


// The Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
}; */
