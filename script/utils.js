export function playSound(src) {
  const volume = loadSettings().volume / 100; 
  const sound = new Audio(src);
  sound.currentTime = 0;
  sound.volume = volume;
  sound.play();
}

export function loadSettings() {
  const settings = localStorage.getItem("gameSettings");
  return JSON.parse(settings);
}
