// === Scroll To Top Button ===
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerText = "↑";
scrollToTopBtn.id = "scrollToTopBtn";
scrollToTopBtn.style.position = "fixed";
scrollToTopBtn.style.bottom = "20px";
scrollToTopBtn.style.right = "20px";
scrollToTopBtn.style.display = "none";
scrollToTopBtn.style.padding = "10px 15px";
scrollToTopBtn.style.fontSize = "20px";
scrollToTopBtn.style.border = "none";
scrollToTopBtn.style.borderRadius = "5px";
scrollToTopBtn.style.backgroundColor = "#c89d00";
scrollToTopBtn.style.color = "#fff";
scrollToTopBtn.style.cursor = "pointer";
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
  scrollToTopBtn.style.display =
    window.scrollY > 300 ? "block" : "none";
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Mobile Menu Toggle ===
const mobileToggle = document.querySelector(".mobile-toggle");
const nav = document.querySelector("nav");

if (mobileToggle && nav) {
  mobileToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// === Scroll-In Animations ===
const animateElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1,
});

animateElements.forEach((el) => observer.observe(el));

// === Fade Page on Load & Link Click ===
document.body.classList.add("fade-in");

const links = document.querySelectorAll("a[href]");

links.forEach(link => {
  const target = link.getAttribute("href");
  if (!target.startsWith("#") && !target.startsWith("mailto")) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = target;
      }, 300);
    });
  }
});
