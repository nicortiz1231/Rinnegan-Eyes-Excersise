const balls = document.getElementsByClassName('ball');
const tomoe4 = document.querySelector('.dot.dot-4');
const tomoe8 = document.querySelector('.dot.dot-8');
const tomoe12 = document.querySelector('.dot.dot-12');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
  
  // Position tomoe shapes inside the "ball" elements
  tomoe4.style.left = '70%';
  tomoe4.style.top = '58%';
  
  tomoe8.style.left = '15%';
  tomoe8.style.top = '61%';
  
  tomoe12.style.left = '40%';
  tomoe12.style.top = '8%';
};
