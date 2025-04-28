// network.js

const offlineNotification = document.getElementById('offlineNotification');
let isOnline = true; // New flag to control gameplay

// Function to check network status
function updateOnlineStatus() {
  if (navigator.onLine) {
    offlineNotification.classList.add('hidden');
    isOnline = true;z``
  } else {
    offlineNotification.classList.remove('hidden');
    isOnline = false;
  }

  if (!isOnline) {
    backgroundMusic.pause();
  } else {
    backgroundMusic.play();
  }
}

// Listen for connection changes
window.addEventListener('offline', updateOnlineStatus);
window.addEventListener('online', updateOnlineStatus);

// Check status immediately after page load
window.addEventListener('load', updateOnlineStatus);
