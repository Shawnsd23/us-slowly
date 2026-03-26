function checkPass() {
    const password = document.getElementById('passInput').value;
    
    // Change '0927' to your actual anniversary or special date
    if (password === '0927') {
        // Hide lock, show content
        document.getElementById('lock-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('lock-screen').classList.add('hidden');
            document.getElementById('main-content').classList.remove('hidden');
            
            // Start Music
            const music = document.getElementById('bgMusic');
            music.volume = 0.5;
            music.play();
            
            // Start Hearts
            setInterval(createHeart, 400);
        }, 500);
    } else {
        alert("That's not our date! Try again ❤️");
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    
    document.body.appendChild(heart);
    
    // Remove heart from DOM after animation
    setTimeout(() => {
        heart.remove();
    }, 4000);
}
