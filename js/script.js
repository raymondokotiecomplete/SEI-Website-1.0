// Animate on scroll
document.addEventListener("DOMContentLoaded", () => {
  const animatedEls = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedEls.forEach(el => observer.observe(el));

  // ✅ Mobile navigation toggle
  const toggleBtn = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // ✅ Gallery filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      galleryItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // ✅ Lightbox logic
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  const nextBtn = document.getElementById("lightbox-next");
  const prevBtn = document.getElementById("lightbox-prev");
  const galleryImages = Array.from(document.querySelectorAll(".gallery-item a"));

  let currentIndex = 0;

  galleryImages.forEach((link, index) => {
    link.addEventListener("click", e => {
      e.preventDefault();
      currentIndex = index;
      showLightbox(link.href);
    });
  });

  function showLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add("active");
  }

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showLightbox(galleryImages[currentIndex].href);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showLightbox(galleryImages[currentIndex].href);
  });

  document.addEventListener("keydown", e => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "Escape") closeBtn.click();
  });
});

// 💸 Money drop animation
const moneyDropContainer = document.querySelector('.money-drop');
if (moneyDropContainer) {
  const moneySymbols = [
    { symbol: '$', class: 'dollar' },
    { symbol: '£', class: 'pound' },
    { symbol: '₦', class: 'naira' }
  ];
  const dropsCount = 30;

  for (let i = 0; i < dropsCount; i++) {
    const drop = document.createElement('span');
    const randomMoney = moneySymbols[Math.floor(Math.random() * moneySymbols.length)];
    drop.textContent = randomMoney.symbol;
    drop.classList.add(randomMoney.class);

    drop.style.left = Math.random() * 100 + 'vw';
    drop.style.animationDuration = (4 + Math.random() * 4) + 's';
    drop.style.fontSize = (18 + Math.random() * 18) + 'px';
    drop.style.animationDelay = (Math.random() * 10) + 's';

    moneyDropContainer.appendChild(drop);
  }
}

// ✅ Form submit (if register form present)
const registrationForm = document.getElementById('registration-form');
if (registrationForm) {
  registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for registering! We will contact you soon.');
    this.reset();
  });
}
// Toggle social sidebar on mobile
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".social-toggle-btn");
  const sidebar = document.querySelector(".social-sidebar");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("show");
    });
  }
});

