const keys = document.querySelectorAll('.key');
Array.from(keys).forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});

document.addEventListener("keydown", playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  if (!audio) return; // if no audio element for key - do nothing
  audio.currentTime=0; // rewind to beginning
  audio.play(); // play audio file
  
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform')  return; // skip if not transform
  e.target.classList.remove('playing');
}
