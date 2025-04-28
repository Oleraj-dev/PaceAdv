window.addEventListener('wheel', function(e) {
    e.preventDefault();
    const scrollSpeed = 0.4;
    window.scrollBy(0, e.deltaY / scrollSpeed);
  }, { passive: false });