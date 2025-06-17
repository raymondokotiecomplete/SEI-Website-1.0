// Scroll Animation
const animateElements = document.querySelectorAll('.animate');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  animateElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
