let overlay = document.querySelector('.overlay');
let container = document.querySelector('.container');

setTimeout(() => {
    overlay.style.display = 'none';
}
, 5400);

setTimeout(() => {
  container.style.display = 'flex';
}
, 4000);