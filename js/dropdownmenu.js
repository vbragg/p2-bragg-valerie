
//variables
var openButton = document.getElementsByClassName('menu-open');
var desktopMenu2 = document.getElementsByClassName('dropdownmenu');


//functions
 function dropDown () {
  for(i = 0; i < openButton.length; i++) {
    desktopMenu2[i].classList.remove('hide');
  }
}

function hideDrop () {
 for(i = 0; i < openButton.length; i++) {
   desktopMenu2[i].classList.add('hide');
 }
}


//event listeners
for(i = 0; i < openButton.length; i++) {
  openButton[i].addEventListener('mouseenter', dropDown);
  openButton[i].addEventListener('mouseleave', hideDrop);
}
