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



/*

function readMore {
  event.preventDefault();

}
mlink.addEventListener("click",
  function(event) {
    event.preventDefault();
    mdiv.style.display = (mdiv.style.display ==="none") ? "block" : "none";
  }, false
);
mdiv.style.display ="none";

function changeText() {
  document.getElementById("textchange").innerHTML = "Enter if you dare";
} */

//EVENT LISTENER
