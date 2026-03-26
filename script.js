document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("enter-btn");
  const input = document.getElementById("password");
  const error = document.getElementById("error");

  const passwordScreen = document.getElementById("password-screen");
  const mainContent = document.getElementById("main-content");

  const music = document.getElementById("bg-music");

  btn.addEventListener("click", function () {

    if (input.value === "25/09/2025") {

      passwordScreen.style.display = "none";
      mainContent.classList.remove("hidden");

      if (music) {
        music.volume = 0.2;
        music.play().catch(() => {});
      }

    } else {
      error.innerText = "wrong password";
    }

  });

  // SCROLL
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
