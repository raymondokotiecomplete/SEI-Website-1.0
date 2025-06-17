// Scroll-triggered animations
document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll('.animate');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  animatedItems.forEach(item => {
    observer.observe(item);
  });
});
