const correctPassword = "25/09/2025";

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");

    const music = document.getElementById("bg-music");
    music.volume = 0.2;
    music.play();
  } else {
    error.innerText = "shayad yeh woh yaad nahi…";
  }
}

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
document.getElementById("secret-trigger").onclick = () => {
  document.getElementById("popup").classList.remove("hidden");
};

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
