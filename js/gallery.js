const galleryImages = [...document.querySelectorAll('.gallery-placeholder')];
const galleryViewer = document.querySelector('.gallery-viewer');

if (galleryViewer && galleryImages.length) {
  const viewerImage = galleryViewer.querySelector('.gallery-viewer-image');
  const previousButton = galleryViewer.querySelector('.gallery-viewer-previous');
  const nextButton = galleryViewer.querySelector('.gallery-viewer-next');
  let currentIndex = 0;
  let activeImageButton = null;

  function showImage(index) {
    currentIndex = (index + galleryImages.length) % galleryImages.length;
    const image = galleryImages[currentIndex];
    viewerImage.src = image.currentSrc || image.src;
    viewerImage.alt = image.alt;
  }

  galleryImages.forEach((image, index) => {
    const button = document.createElement('button');
    button.className = 'gallery-image-button';
    button.type = 'button';
    button.setAttribute('aria-label', `View image: ${image.alt}`);
    image.parentNode.insertBefore(button, image);
    button.append(image);
    button.addEventListener('click', () => {
      activeImageButton = button;
      showImage(index);
      galleryViewer.showModal();
      previousButton.focus();
    });
  });

  previousButton.addEventListener('click', () => showImage(currentIndex - 1));
  nextButton.addEventListener('click', () => showImage(currentIndex + 1));

  galleryViewer.addEventListener('click', (event) => {
    if (event.target === galleryViewer || event.target === galleryViewer.querySelector('.gallery-viewer-figure')) {
      galleryViewer.close();
    }
  });

  galleryViewer.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      galleryViewer.close();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showImage(currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      showImage(currentIndex + 1);
    }
  });

  galleryViewer.addEventListener('close', () => {
    if (activeImageButton) activeImageButton.focus();
  });
}
