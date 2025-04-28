window.addEventListener('wheel', function(e) {
    e.preventDefault();
    const scrollSpeed = 1.5;
    window.scrollBy(0, e.deltaY / scrollSpeed);
  }, { passive: false });