export function playSound(src) {
  const sound = new Audio(src);
  sound.currentTime = 0;
  sound.play();
}
