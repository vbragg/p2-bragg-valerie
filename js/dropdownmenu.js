/*var openButton = document.getElementById('menu-open');
var desktopMenu = document.getElementById('dropdownmenu');


function showMenu() {
  desktopMenu.classList.remove('hide');
}

function hideMenu () {
  desktopMenu.classList.add('hide');
} */

var openButton = document.getElementsByClassName('menu-open');
var desktopMenu2 = document.getElementsByClassName('dropdownmenu');

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

//firstOne.addEventListener('mouseenter', dropDown);
//firstOne.addEventListener('mouseleave', hideDrop);



for(i = 0; i < openButton.length; i++) {
  openButton[i].addEventListener('mouseenter', dropDown);
  openButton[i].addEventListener('mouseleave', hideDrop);
}


/*

function showMenu () {
  desktopMenu[0].classList.remove('hide');
}

function hideMenu () {
  desktopMenu[0].classList.add('hide');
}

for (i=0; i < openButton.length; i++) {
  openButton[i].addEventListener('mouseover', showMenu);
  openButton[i].addEventListener('mouseout', hideMenu);

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
