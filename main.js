const humburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const navList = document.querySelector('.nav-list');

humburger.addEventListener('click', ()=>{
  navList.classList.add('show-nav');
  closeBtn.style.visibility = 'visible';
  humburger.style.visibility = 'hidden';
})
closeBtn.addEventListener('click', ()=>{
  navList.classList.remove('show-nav');
  closeBtn.style.visibility = 'hidden';
  humburger.style.visibility = 'visible';
})





























