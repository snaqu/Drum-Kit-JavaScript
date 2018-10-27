document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("keydown", e => {
    let audioFiles = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let audioButton = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audioFiles) {
      return;
    } else {
      audioButton.classList.add("playing");
      audioFiles.currentTime = 0;
      audioFiles.play();
    }
  });
  const keys = document.querySelectorAll(".key");
  keys.forEach(key =>
    key.addEventListener("transitionend", e => {
      if (e.propertyName !== "transform") {
        return;
      } else {
        e.target.classList.remove("playing");
      }
    })
  );
});
