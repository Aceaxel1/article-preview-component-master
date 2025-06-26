console.log("Script loaded");

document.addEventListener('DOMContentLoaded', function () {
  const shareButton = document.querySelector('.share__button');
  const sharePopup = document.querySelector('.share__popup');

  if (shareButton && sharePopup) {
    shareButton.addEventListener('mouseenter', function () {
      sharePopup.classList.add('active');
      shareButton.classList.add('active');
    });
    shareButton.addEventListener('mouseleave', function () {
      sharePopup.classList.remove('active');
      shareButton.classList.remove('active');
    });
    sharePopup.addEventListener('mouseenter', function () {
      sharePopup.classList.add('active');
      shareButton.classList.add('active');
    });
    sharePopup.addEventListener('mouseleave', function () {
      sharePopup.classList.remove('active');
      shareButton.classList.remove('active');
    });
  }
}); 