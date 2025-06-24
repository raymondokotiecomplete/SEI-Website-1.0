// ✅ Animate on scroll
document.addEventListener("DOMContentLoaded", () => {
  const animatedEls = document.querySelectorAll(".animate");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  animatedEls.forEach((el) => observer.observe(el));

  // ✅ Mobile menu toggle
  const toggleBtn = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // ✅ Gallery filter
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        galleryItems.forEach((item) => {
          item.style.display = (category === "all" || item.dataset.category === category) ? "block" : "none";
        });
      });
    });
  }

  // ✅ Gallery Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  const nextBtn = document.getElementById("lightbox-next");
  const prevBtn = document.getElementById("lightbox-prev");
  const galleryLinks = Array.from(document.querySelectorAll(".gallery-item a.view-img"));
  let currentIndex = 0;

  if (galleryLinks.length && lightbox && lightboxImg && closeBtn && nextBtn && prevBtn) {
    galleryLinks.forEach((link, index) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        currentIndex = index;
        showLightbox(link.href);
      });
    });

    function showLightbox(src) {
      lightboxImg.src = src;
      lightbox.classList.add("active");
    }

    function updateLightbox(index) {
      currentIndex = (index + galleryLinks.length) % galleryLinks.length;
      showLightbox(galleryLinks[currentIndex].href);
    }

    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
    nextBtn.addEventListener("click", () => updateLightbox(currentIndex + 1));
    prevBtn.addEventListener("click", () => updateLightbox(currentIndex - 1));

    document.addEventListener("keydown", (e) => {
      let touchStartX = 0;
let touchEndX = 0;

function handleSwipeGesture() {
  const swipeThreshold = 50; // Minimum distance in px for a swipe
  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left
    nextBtn.click();
  } else if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe right
    prevBtn.click();
  }
}

lightbox.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
});

      if (!lightbox.classList.contains("active")) return;
      if (e.key === "ArrowRight") nextBtn.click();
      if (e.key === "ArrowLeft") prevBtn.click();
      if (e.key === "Escape") closeBtn.click();
    });
  }
});
// Sidebar toggle for mobile
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}

// Theme toggle (light/dark mode basic demo)
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}
function previewProfileImage(event) {
  const reader = new FileReader();
  reader.onload = function(){
    const img = document.getElementById('profile-img');
    img.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}