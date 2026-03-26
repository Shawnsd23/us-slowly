document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("enter-btn");
  const input = document.getElementById("password");
  const error = document.getElementById("error");

  const passwordScreen = document.getElementById("password-screen");
  const mainContent = document.getElementById("main-content");

  const music = document.getElementById("bg-music");

  btn.addEventListener("click", function () {

    if (input.value === "25/09/2025") {

      passwordScreen.style.opacity = "0";

      setTimeout(() => {
        passwordScreen.style.display = "none";
        mainContent.classList.remove("hidden");
      }, 500);

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
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) {
        el.classList.add("active");
      }
    });
  });

});
