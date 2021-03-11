const h = document.querySelector('.horizontal');
const v = document.querySelector('.vertical');
const tag = document.querySelector('.tag');
const target = document.querySelector('.target');

document.addEventListener('mousemove', (e) => {
  tag.innerText = e.clientX + 'px, ' + e.clientY + 'px';
  target.setAttribute('style', `top: ${e.clientY}px; left: ${e.clientX}px`);
  tag.setAttribute('style', `top: ${e.clientY}px; left: ${e.clientX}px`);
  h.setAttribute('style', `top: ${e.clientY}px;`);
  v.setAttribute('style', `left: ${e.clientX}px;`);
})