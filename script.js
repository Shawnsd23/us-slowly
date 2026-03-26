document.addEventListener("DOMContentLoaded", function () {

  const correctPassword = "25/09/2025";

  const btn = document.getElementById("enter-btn");
  const input = document.getElementById("password");
  const error = document.getElementById("error");

  const passwordScreen = document.getElementById("password-screen");
  const mainContent = document.getElementById("main-content");

  const music = document.getElementById("bg-music");

  // PASSWORD
  btn.addEventListener("click", function () {
    if (input.value === correctPassword) {

      passwordScreen.style.display = "none";
      mainContent.classList.remove("hidden");

      if (music) {
        music.volume = 0.2;
        music.play().catch(() => {});
      }

    } else {
      error.innerText = "shayad yeh woh yaad nahi…";
    }
  });

  // SCROLL ANIMATION
  const reveals = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", function () {
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  });

});
