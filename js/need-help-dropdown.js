//variables

var openMenu = document.getElementsByClassName('need-help-open');
var desktopMenu3 = document.getElementsByClassName('dropdownhelpmenu')

//functions

 function dropDown () {
  for(i = 0; i < openMenu.length; i++) {
    desktopMenu3[i].classList.remove('hide');
  }
}

function hideDrop () {
 for(i = 0; i < openMenu.length; i++) {
   desktopMenu3[i].classList.add('hide');
 }
}


//event listeners

for(i = 0; i < openMenu.length; i++) {
  openMenu[i].addEventListener('mouseenter', dropDown);
  openMenu[i].addEventListener('mouseleave', hideDrop);
}
