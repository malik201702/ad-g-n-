function beatHeart() {
    const heart = document.querySelector('.heart');
    heart.style.transform = 'rotate(-45deg) scale(1.6)';
    setTimeout(() => {
      heart.style.transform = 'rotate(-45deg) scale(1)';
    }, 300);
  }
  
  function loveRain() {
    const container = document.querySelector('.floating-hearts');
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement('span');
      heart.innerHTML = '❤️';
      heart.style.left = Math.random() * window.innerWidth + 'px';
      container.appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, 6000);
    }
  }
  
  setInterval(() => {
    const container = document.querySelector('.floating-hearts');
    const heart = document.createElement('span');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    container.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 1000);
  