console.log("Script loaded");
// No JS needed for popup hover effect; handled by CSS. 

document.addEventListener('DOMContentLoaded', function () {
  const shareButton = document.querySelector('.article-preview__share .share__button');
  const articlePreview = document.querySelector('.article-preview');
  const shareBarButton = document.querySelector('.article-preview__sharebar .share__button');

  // Mobile detection
  const isMobile = window.innerWidth <= 600 || 'ontouchstart' in window;

  if (isMobile) {
    // Toggle sharebar on mobile
    if (shareButton && articlePreview) {
      shareButton.addEventListener('touchstart', function (e) {
        e.preventDefault();
        articlePreview.classList.toggle('share-active');
      });
    }
    // Also allow closing by tapping the share button in the sharebar
    if (shareBarButton && articlePreview) {
      shareBarButton.addEventListener('touchstart', function (e) {
        e.preventDefault();
        articlePreview.classList.remove('share-active');
      });
    }
    // Close sharebar when tapping outside
    document.addEventListener('touchstart', function (e) {
      if (
        articlePreview.classList.contains('share-active') &&
        !e.target.closest('.article-preview__footer')
      ) {
        articlePreview.classList.remove('share-active');
      }
    });
  } else {
    // Desktop hover events (CSS handles this, but we can add JS for additional functionality)
    shareButton.addEventListener('mouseenter', function () {
      shareButton.classList.add('active');
    });
    
    shareButton.addEventListener('mouseleave', function () {
      shareButton.classList.remove('active');
    });
  }

  // Handle window resize
  window.addEventListener('resize', function () {
    const newIsMobile = window.innerWidth <= 600;
    if (newIsMobile !== isMobile) {
      // Reload page or reinitialize events if needed
      location.reload();
    }
  });
}); 