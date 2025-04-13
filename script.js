const button = document.getElementById('scroll');

let isScrolling = false;

button.addEventListener('mousedown', function(event) {
  isScrolling = true;

  function scrollContinuosly() {
    if (isScrolling) {
      window.scrollBy(0, 5);
      requestAnimationFrame(scrollContinuosly);
    }
  }

  requestAnimationFrame(scrollContinuosly);
  });

  button.addEventListener('mouseup', function() {
    isScrolling = false;
  });