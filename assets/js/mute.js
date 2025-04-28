// mute.js
document.getElementById('muteBtn').addEventListener('click', toggleMute);

let isMuted = false;

// Play background music after first click
document.addEventListener('click', () => {
  if (backgroundMusic.paused && !isMuted) {
    backgroundMusic.play();
  }
}, { once: true });

// Mute/Unmute function
function toggleMute() {
  isMuted = !isMuted;
  
  if (isMuted) {
    backgroundMusic.pause();
  } else {
    backgroundMusic.play();
  }
  
  updateMuteButtonIcon();
}

// Update the mute button icon
function updateMuteButtonIcon() {
  const muteIcon = document.getElementById('muteBtnIcon');
  
  if (isMuted) {
    muteIcon.className = 'fas fa-volume-mute';
  } else {
    muteIcon.className = 'fas fa-volume-up';
  }
}
