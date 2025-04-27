// sound.js

// Load sounds
const squishSound = new Audio('assets/sounds/squish.mp3');
const backgroundMusic = new Audio('assets/sounds/background-music.mp3');

// Background music settings
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5; // 50% volume

// Play background music on first click
document.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  }
}, { once: true });

// Function to play squish sound
function playSquishSound() {
  squishSound.currentTime = 0;
  squishSound.play();
}
