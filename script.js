document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("enter");
  const pass = document.getElementById("password");
  const error = document.getElementById("error");

  const screen = document.getElementById("password-screen");
  const main = document.getElementById("main");

  const music = document.getElementById("music");

  btn.addEventListener("click", () => {

    if (pass.value === "25/09/2025") {

      screen.style.display = "none";
      main.classList.remove("hidden");

      music.volume = 0.3;
      music.play().catch(()=>{});

    } else {
      error.innerText = "wrong password";
    }

  });

  // SCROLL ANIMATION
  const reveals = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  });

});
