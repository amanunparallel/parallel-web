document.addEventListener("DOMContentLoaded", function () {
  const label = document.querySelector('[update="text"]');
  const texts = [
    "our breath",
    "our health",
    "ourselves",
    "our family",
    "our home",
    "our Earth",
  ];
  let currentTextIndex = 0;

  function fadeEffect() {
    gsap.to(label, { opacity: 1, duration: 2 });
  }

  function updateText() {
    label.style.opacity = 0;
    label.textContent = texts[currentTextIndex];
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    fadeEffect();
  }

  setInterval(updateText, 4000); // Adjust timing as needed
  updateText(); // Initial call to display the first text
});
