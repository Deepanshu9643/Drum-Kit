function removetransitionend(e) {
  // if(e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playsound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return; // If audio is null or undefined, the function exits early.

  key.classList.add('playing');

  audio.currentTime = 0; // Resets the audio playback. Starts the audio from the beginning.

  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removetransitionend)); // Waits for a CSS animation to finish.

window.addEventListener('keydown', playsound);
