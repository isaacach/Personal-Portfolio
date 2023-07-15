let overlay = document.querySelector('.overlay');
let container = document.querySelector('.container');
let home = document.querySelector('.home');
let toTop = document.querySelector('.footer-icon-wrapper');

home.addEventListener('click', () => {
  scrollTo({
    top: 0, 
    left: 0, 
    behavior: "smooth"
  });
});

toTop.addEventListener('click', () => {
  scrollTo({
    top: 0, 
    left: 0, 
    behavior: "smooth"
  });
});


