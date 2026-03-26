const correctPassword = "25/09/2025";

document.addEventListener("DOMContentLoaded", () => {

  const passwordBtn = document.querySelector("button");
  const passwordInput = document.getElementById("password");
  const error = document.getElementById("error");
  const music = document.getElementById("bg-music");

  passwordBtn.addEventListener("click", () => {
    if (passwordInput.value === correctPassword) {
      
      // Hide password screen
      document.getElementById("password-screen").style.display = "none";
      document.getElementById("main-content").classList.remove("hidden");

      // Play music safely
      if (music) {
        music.volume = 0.2;
        music.play().catch(() => {
          console.log("Autoplay blocked (normal)");
        });
      }

    } else {
      error.innerText = "shayad yeh woh yaad nahi…";
    }
  });

  /* SCROLL ANIMATION */
  const reveals = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const revealTop = el.getBoundingClientRect().top;

      if (revealTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  });

  /* SECRET MESSAGE */
  const secret = document.getElementById("secret-trigger");
  const popup = document.getElementById("popup");

  if (secret) {
    secret.addEventListener("click", () => {
      popup.classList.remove("hidden");
    });
  }

});

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
