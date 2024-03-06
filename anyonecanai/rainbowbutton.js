function applyButtonHoverEffect(btn) {
  let deg = -946;
  let intervalId;

  btn.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      const remainingDistance = 90 - deg;
      const step = Math.sign(remainingDistance) * Math.min(15, Math.abs(remainingDistance / 50)); 
      deg += step; 
      btn.style.setProperty('--deg', deg);
      if (Math.abs(remainingDistance) <= 10) { 
        clearInterval(intervalId);
        intervalId = setInterval(() => {
          deg += step; 
          btn.style.setProperty('--deg', deg);
          if (Math.abs(90 - deg) <= 1) {
            clearInterval(intervalId);
          }
        }, 20); 
      }
    }, 20);
  });

  btn.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
    deg = -946; 
    btn.style.setProperty('--deg', deg);
  });
  
btn.addEventListener('mousemove', (e) => {
  const rect = btn.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const btnWidth = btn.offsetWidth;
  const percent = mouseX / btnWidth;
  const targetDeg = -946 + percent * (90 - (-946)); 
  const step = (targetDeg - deg) * 0.09; // Adjust the factor (0.1) to control the speed
  deg += step; 
  btn.style.setProperty('--deg', deg);
});

}

document.querySelectorAll('.btn').forEach(btn => {
  applyButtonHoverEffect(btn);
});
