
let imageSources = ["assets/Photos/unsamples/62COPAwmyKA.jpg", "assets/Photos/unsamples/z0DHUeJNHzk.jpg"]
let mainImage = document.querySelector('.currentImage');
console.log(mainImage);

mainImage.setAttribute('src', imageSources[0]);

//Right and left buttons to change image currently displayed, and also to temporarily change colour of the button in order to provide user feedback

let rightButton = document.getElementById('rightArrow');
let leftButton = document.getElementById('leftArrow');
let indexTracker = 0;

rightButton.onmousedown = function () {
  rightButton.style.filter = 'invert(100%)';
  indexTracker += 1;
  mainImage.setAttribute('src', imageSources[indexTracker])
}
rightButton.onmouseup = function () {
  rightButton.style.filter = 'invert(0%)';
}

leftButton.onmousedown = function () {
  leftButton.style.filter = 'invert(100%)';
  indexTracker -= 1;
  mainImage.setAttribute('src', imageSources[indexTracker]);
}
leftButton.onmouseup = function () {
  leftButton.style.filter = 'invert(0%)';
}