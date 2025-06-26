document.addEventListener('DOMContentLoaded', function () {
  const shareButton = document.querySelector('.share__button');
  const sharePopup = document.querySelector('.share__popup');

  if (shareButton && sharePopup) {
    shareButton.addEventListener('click', function (e) {
      e.stopPropagation();
      sharePopup.classList.toggle('active');
      shareButton.classList.toggle('active');
    });
    // Hide popup when clicking outside
    document.addEventListener('click', function (e) {
      if (!shareButton.contains(e.target) && !sharePopup.contains(e.target)) {
        sharePopup.classList.remove('active');
        shareButton.classList.remove('active');
      }
    });
  }
}); 