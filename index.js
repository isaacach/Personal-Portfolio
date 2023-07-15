let overlay = document.querySelector('.overlay');
let container = document.querySelector('.container');

let home = document.querySelector('.home');

home.addEventListener('click', () => {
  scrollTo({
    top: 0, 
    left: 0, 
    behavior: "smooth"
  });
});




