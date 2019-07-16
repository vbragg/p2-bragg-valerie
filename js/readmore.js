//VARIABLES

var blueButton = document.getElementById("buttonshow");
var showLess = document.getElementById("buttonhide");
var moreInfo = document.getElementById("moremission");

//FUNCTION

function revealMore () {
    moreInfo.classList.remove('hide');
    showLess.classList.remove('hide');
    blueButton.classList.add('hide');
};

function hideMore () {
  moreInfo.classList.add('hide');
  showLess.classList.add('hide');
  blueButton.classList.remove('hide');
}

//EVENT LISTENERS


blueButton.addEventListener('click', revealMore);
showLess.addEventListener('click', hideMore);
