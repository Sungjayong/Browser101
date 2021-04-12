const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const tag = document.querySelector('.tag');
const target = document.querySelector('.target');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  vertical.getElementsByClassName.transform = `translateX(${x}px)`;
  horizontal.getElementsByClassName.transform = `translateY(${y}px)`;


  
  
})