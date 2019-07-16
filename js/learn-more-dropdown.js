//variables

var openLearn = document.getElementsByClassName('learn-more-open');
var desktopMenu = document.getElementsByClassName('dropdownlearnmenu')


//functions
 function dropDown () {
  for(i = 0; i < openLearn.length; i++) {
    desktopMenu[i].classList.remove('hide');
  }
}

function hideDrop () {
 for(i = 0; i < openLearn.length; i++) {
   desktopMenu[i].classList.add('hide');
 }
}



//Event Listeners
for(i = 0; i < openMenu.length; i++) {
  openLearn[i].addEventListener('mouseenter', dropDown);
  openLearn[i].addEventListener('mouseleave', hideDrop);
}
