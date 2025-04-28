window.addEventListener('wheel', function (e) {
  e.preventDefault();
  const scrollSpeed = 1.5;
  window.scrollBy(0, e.deltaY / scrollSpeed);
}, { passive: false });

// Prevent GSAP's ScrollTrigger from intercepting

const scrollImages = document.querySelectorAll(".scroll-image");
scrollImages.forEach((el) => {
  el.addEventListener("wheel", function (e) {
    const scrollSpeed = 0.3;

    const deltaY = e.deltaY;
    const deltaX = e.deltaX;

    const atTop = el.scrollTop === 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight;
    const atLeft = el.scrollLeft === 0;
    const atRight = el.scrollLeft + el.clientWidth >= el.scrollWidth;

    // Determine if scrolling would go beyond limits
    const verticalLimit = (atTop && deltaY < 0) || (atBottom && deltaY > 0);
    const horizontalLimit = (atLeft && deltaX < 0) || (atRight && deltaX > 0);

    const isScrollable =
      el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;

    if (isScrollable && !(verticalLimit || horizontalLimit)) {
      e.preventDefault();
      el.scrollBy({
        left: deltaX / scrollSpeed,
        top: deltaY / scrollSpeed,
        behavior: "smooth"
      });
      e.stopPropagation();
    }
  }, { passive: false });
});



scrollImages.forEach((el) => {
  let isDown = false;
  let startY;
  let scrollTop;

  el.addEventListener("mousedown", (e) => {
    isDown = true;
    el.classList.add("dragging");
    startY = e.pageY - el.offsetTop;
    scrollTop = el.scrollTop;
    e.preventDefault();
  });

  el.addEventListener("mouseleave", () => {
    isDown = false;
    el.classList.remove("dragging");
  });

  el.addEventListener("mouseup", () => {
    isDown = false;
    el.classList.remove("dragging");
  });

  el.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.pageY - el.offsetTop;
    const walk = (y - startY);
    el.scrollTop = scrollTop - walk;
  });
});
