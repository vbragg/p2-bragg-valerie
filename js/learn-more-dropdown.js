var openLearn = document.getElementsByClassName('learn-more-open');
var desktopMenu = document.getElementsByClassName('dropdownlearnmenu')


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

//firstOne.addEventListener('mouseenter', dropDown);
//firstOne.addEventListener('mouseleave', hideDrop);



for(i = 0; i < openMenu.length; i++) {
  openLearn[i].addEventListener('mouseenter', dropDown);
  openLearn[i].addEventListener('mouseleave', hideDrop);
}
